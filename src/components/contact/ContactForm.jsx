import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	function postForm() {
		const form = document.getElementById('form');
		const result = document.getElementById('result');

		form.addEventListener('submit', function (e) {
			const formData = new FormData(form);
			e.preventDefault();

			const object = Object.fromEntries(formData);
			const json = JSON.stringify(object);

			result.innerHTML = "Please wait..."

			fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: json
			})
				.then(async (response) => {
					let json = await response.json();
					if (response.status == 200) {
						result.innerHTML = json.message;
						result.classList.remove("text-gray-500");
						result.classList.add("text-green-500");
					} else {
						console.log(response);
						result.innerHTML = json.message;
						result.classList.remove("text-gray-500");
						result.classList.add("text-red-500");
					}
				})
				.catch((error) => {
					console.log(error);
					result.innerHTML = "Something went wrong!";
				})
				.then(function () {
					form.reset();
					setTimeout(() => {
						result.style.display = "none";
					}, 3000);
				});
		});
	}
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form action="https://api.web3forms.com/submit" method="POST" id="form"
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<input type="hidden" name="apikey" value="536b4f16-3390-4bdc-9b18-c4e07fcb75cf" />
					<input type="hidden" name="subject" value="New Submission from Web3Forms" />

					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500" onClick={postForm}>
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>

					</div>
					<p class="text-base text-center text-gray-400" id="result"></p>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
