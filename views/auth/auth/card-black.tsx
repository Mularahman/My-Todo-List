
import { motion } from "framer-motion";

const CardBlack = ({ isSignUp, onSignUpClick }: { isSignUp: boolean; onSignUpClick: () => void }) => {
    return (
        <motion.div
            animate={{ x: isSignUp ? '-100%' : '0%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col justify-center md:w-1/2 w-full p-12 bg-gray-900 h-auto md:rounded-2xl"
        >
            {!isSignUp ? (

                <div className="p-12 text-center">
                    <div className="text-center text-white mb-4">
                        <h1 className="text-3xl font-bold mb-5">Glad to see you!</h1>
                        <p className="mb-10 mt-2">
                            Enter your personal details <br />
                            and start your journey with us
                        </p>
                    </div>
                    <button
                        onClick={onSignUpClick}
                        className="w-full py-3 px-4 border border-white text-white font-bold rounded-full text-center hover:bg-white hover:text-gray-900"
                    >
                        Sign Up
                    </button>
                </div>

            ) : (
                <div className="p-12 text-center">
                    <div className="text-center text-white mb-4">
                        <h1 className="text-3xl font-bold mb-5">Welcome Back!</h1>
                        <p className="mb-10 mt-2">
                            To keep connected with us please. <br /> login with your
                            personal info
                        </p>
                    </div >
                    <button
                        onClick={onSignUpClick}
                        className="w-full py-3 px-4 border border-white text-white font-bold rounded-full text-center hover:bg-white hover:text-gray-900"
                    >
                        Sign In
                    </button>
                </div >


            )}
        </motion.div>
    )
}
export default CardBlack;