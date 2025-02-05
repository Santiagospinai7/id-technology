import emailjs from '@emailjs/browser';
import { CheckCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PQRSFForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'Petición',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Todos los campos son obligatorios');
            setIsSubmitting(false);
            return;
        }

        const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            type: formData.type,
            message: formData.message,
            to_email: import.meta.env.VITE_EMAILJS_EMAIL, // Destination email
        };

        console.log('email params', emailParams)

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,  
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                emailParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY   
            );

            toast.success('PQRSF enviada con éxito');
            setIsSubmitted(true); // Show success message
        } catch (error) {
            console.error('Error enviando PQRSF:', error);
            toast.error('Error al enviar PQRSF');
        }

        setIsSubmitting(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto mt-10 mb-10 bg-white shadow-lg rounded-lg p-6"
        >
            {/* Show confirmation message after submission */}
            {isSubmitted ? (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-800">¡Gracias por tu PQRSF!</h2>
                    <p className="text-gray-500 mt-2">
                        Hemos recibido tu solicitud. Nos pondremos en contacto contigo lo antes posible.
                    </p>
                    
                    <button
                        onClick={() => setIsSubmitted(false)} // Reset form
                        className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Enviar otra PQRSF
                    </button>
                </motion.div>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
                        ¿Tienes una PQRSF? ¡Cuéntanos!
                    </h2>
                    <p className="text-gray-500 mb-6 text-left">
                        Tu opinión es importante para nosotros. Déjanos tu mensaje y nos pondremos en contacto contigo.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div className="text-left">
                            <label className="block text-gray-700 font-medium">Nombre Completo</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-green-200 focus:border-green-400"
                                placeholder="Escribe tu nombre"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="text-left">
                            <label className="block text-gray-700 font-medium">Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-green-200 focus:border-green-400"
                                placeholder="tucorreo@ejemplo.com"
                                required
                            />
                        </div>

                        {/* Type of PQRSF */}
                        <div className="text-left">
                            <label className="block text-gray-700 font-medium">Tipo de Solicitud</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-green-200 focus:border-green-400"
                            >
                                <option value="Petición">Petición</option>
                                <option value="Queja">Queja</option>
                                <option value="Reclamo">Reclamo</option>
                                <option value="Sugerencia">Sugerencia</option>
                                <option value="Felicitación">Felicitación</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="text-left">
                            <label className="block text-gray-700 font-medium">Mensaje</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-green-200 focus:border-green-400 h-32 resize-none"
                                placeholder="Escribe tu mensaje aquí..."
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-left">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <span>Enviando...</span>
                                ) : (
                                    <>
                                        <PaperAirplaneIcon className="w-5 h-5" />
                                        <span>Enviar PQRSF</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </>
            )}
        </motion.div>
    );
};

export default PQRSFForm;