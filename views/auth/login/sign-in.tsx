const SignIn = () => {
    return ( 
        <div className="flex flex-col justify-center md:w-1/2 w-full p-12 bg-gray-900 h-auto md:rounded-r-2xl">
            <div className="p-12">
                <div className="text-center text-white mb-4">
                    <h1 className="text-3xl font-bold mb-5">Glad to see you!</h1>
                    <p className="mb-10 mt-2">
                        Enter your personal details <br />
                        and start journey with us
                    </p>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 outline -outline-offset-2 outline-white  text-white font-bold rounded-full  hover:bg-white hover:text-gray-900 "
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}
export default SignIn;