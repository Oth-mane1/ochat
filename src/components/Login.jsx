import RippleButton from "./RippleButton";
const _3dObjectImg = require("../images/3d_objects.png");

export default function Login(props) {

	return (
		<main className="flex h-screen bg-gray-100">
			<section className="w-2/6 bg-blue-jelly">
				<div className="h-screen flex items-center justify-end relative ml-20 -mr-28">
					<img className="absolute right-0 drop-shadow-2xl" src={_3dObjectImg} alt="3d objects" />
				</div>
			</section>
			<section className="w-4/6 pl-32 -ml-10 bg-gray-100 rounded-l-[44px]">
				<div className="w-4/6 m-auto h-screen flex items-center justify-center flex-col">
					<h1 className="w-full text-left font-semibold text-gray-800 text-4xl">Create Account</h1>
					<div className="w-full flex items-center justify-around font-semibold text-3xl my-5">
						<div role={"button"} class="flex items-center justify-center my-1 p-2 px-3 rounded-3xl text-3xl border-2">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"
									fill="#70AFCE"
								/>
							</svg>
							<span className="text-xs text-gray-500 ml-2">Sign up with Google</span>
						</div>
						<div role={"button"} class="flex items-center justify-center my-1 p-2 px-3 rounded-3xl text-3xl border-2">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
									fill="#70AFCE"
								/>
							</svg>
							<span className="text-xs text-gray-500 ml-2">Sign up with Google</span>
						</div>
					</div>
					<span className="text-gray-600">- OR -</span>
					<form className="w-full text-lg my-5">
						<div class="grid xl:grid-cols-2 xl:gap-6">
							<div class="relative z-0 w-full mb-6 group">
								<input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
								<label for="floating_first_name" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
							</div>
							<div class="relative z-0 w-full mb-6 group">
								<input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
								<label for="floating_last_name" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
							</div>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
							<label for="floating_phone" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
							<label for="floating_email" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
						</div>
						<div class="grid xl:grid-cols-2 xl:gap-6">
							<div class="relative z-0 w-full mb-6 group">
								<input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
								<label for="floating_password" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
							</div>
							<div class="relative z-0 w-full mb-6 group">
								<input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-jelly peer" placeholder=" " required />
								<label for="floating_repeat_password" class="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-jelly peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
							</div>
						</div>
						<RippleButton class="px-6 py-2 mt-3 text-lg text-white bg-blue-jelly hover:bg-blue-jelly focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto text-center">
							Sign up
						</RippleButton>
					</form>
					<p className="w-full text-left">Already have an account? <span className="text-blue-jelly font-semibold">Log in</span>.</p>
				</div>
			</section>
		</main>
	);
}