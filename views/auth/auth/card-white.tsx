
import { motion } from "framer-motion";
import SignIn from "./login/form";
import SignUp from "./register/form";
import { useEffect, useState } from "react";

// Hook custom untuk mendeteksi ukuran layar md
const useIsMdScreen = () => {
    const [isMdScreen, setIsMdScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsMdScreen(window.innerWidth <= 768); // Ukuran layar md adalah 768px atau lebih besar
        };

        updateScreenSize(); // Cek ukuran layar pada saat komponen dimount
        window.addEventListener("resize", updateScreenSize); // Update ukuran layar saat jendela diubah

        return () => window.removeEventListener("resize", updateScreenSize); // Bersihkan event listener saat komponen dilepas
    }, []);

    return isMdScreen;
};

const CardWhite = ({ isSignUp }: { isSignUp: boolean }) => {
    const isMdScreen = useIsMdScreen();

    return (
        <motion.div
            animate={isMdScreen ? { y: isSignUp ? '100%' : '0%' } : { x: isSignUp ? '100%' : '0%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col justify-center md:w-1/2 w-full p-12 bg-white h-auto md:rounded-2xl">
            {isSignUp ? (
                <SignUp />
            ) : (
                <SignIn />
            )}
        </motion.div>
    )
}
export default CardWhite;