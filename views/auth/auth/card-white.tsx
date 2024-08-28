
import { motion } from "framer-motion";
import SignUp from "./register/form";
import SignIn from "./login/form";

const CardWhite = ({ isSignUp }: { isSignUp: boolean }) => {
  

    return ( 
        <motion.div
            animate={{ x: isSignUp ? '100%' : '0%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col justify-center md:w-1/2 w-full p-12 bg-white h-auto md:rounded-2xl">
            {isSignUp ? (
                
                <SignIn />
            ) : (
                <SignUp />
                     )}
        </motion.div>
    )
}
export default CardWhite;