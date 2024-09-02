
import { LoginRequest } from "@/model/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginUserSchema } from "../schema";
const SignIn = () => {
   
    const { email, password } = loginUserSchema;
    const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>();

    const onSubmit: SubmitHandler<LoginRequest> = (data: LoginRequest) => {
        console.log(data);
    }
    return (
        <div className="p-12">
            <div className="text-center text-gray-900 mb-8">
                <h1 className="text-3xl font-bold text-orange-500 mb-2">
                    Hello!
                </h1>
                <p>Sign in to your account</p>
            </div>
            <div className="flex items-center mb-8 justify-center">
                <a
                    href="#"
                    className="p-3 rounded-full outline -outline-offset-2 outline-gray-200 me-4 hover:bg-orange-500 hover:outline-none hover:text-white group"
                >
                    <svg
                        className=" w-6 h-6 fill-current text-black group-hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                    >
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                </a>
                <a
                    href="#"
                    className="p-3 rounded-full outline -outline-offset-2 outline-gray-200  hover:bg-orange-500 hover:outline-none hover:text-white group"
                >
                    <svg
                        className="w-6 h-6 fill-current text-black group-hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                </a>
            </div>
            <div className="mb-2 text-black text-sm text-center">
                {" "}
                <p>or us your email for Sign In</p>
            </div>
            <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mt-10 text-gray-900">
                    <input
                        type="email"
                        id="email"
                        {...register("email", email.validation)}
                        className="w-full px-12 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        placeholder={email.placeholder}
                    />
                    <svg
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>

                </div>
                <div className="text-red-500">
                    {errors.email && (
                        <span className="-mt-3 text-sm ">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="relative mt-1 text-gray-900">
                    <input
                        type="password"
                        id="password"

                        {...register("password", password.validation)}
                        className={`${errors.password ? "border-red-500" : "border-gray-300"} ${errors.password ? "focus:border-red-500" : "focus:border-orange-500"} w-full px-12 py-3 border  rounded-full shadow-sm focus:outline-none focus:ring-orange-500  sm:text-sm`}
                        placeholder={password.placeholder}
                    />
                    <svg
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                    </svg>

                </div>
                <div className="text-red-500">
                    {errors.password && (
                        <span className="-mt-3 text-sm text-red-500">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center ml-2 mb-2">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="h-4 w-4 accent-orange-600 border-gray-300 focus:outline-none rounded-full cursor-pointer shadow-sm focus:ring-orange-500 "
                        />
                        <label
                            htmlFor="terms"
                            className="ml-2 text-sm text-gray-900 hover:text-orange-500 cursor-pointer"
                        >
                            Remember Me
                        </label>
                    </div>
                    <div className="items-center text-gray-900 text-sm hover:text-orange-500 ">
                        <a href="">Forgot Password ?</a>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full mt-5 py-3 px-4 bg-orange-500 text-white font-bold rounded-full shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}
export default SignIn;