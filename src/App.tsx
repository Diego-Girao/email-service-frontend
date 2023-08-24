import { useState } from "react"
import "./App.css"
import PrimaryInputProps from "./components/Input/PrimaryInput"
import { Button, Spacer } from "@chakra-ui/react"
import { useIdentityMutation } from "./hooks/useIdentityMutation"

function App() {
	const [email, setEmail] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const { mutate } = useIdentityMutation()

	const submit = () => {
		mutate({
			firstName,
			lastName,
			email,
		})
	}

	return (
		<div className="container">
			<form>
				<div className="name-form-container">
					<PrimaryInputProps
						value={firstName}
						onChange={(event) => setFirstName(event.target.value)}
						name="firstName"
						label="Nome"
						placeholder="Manuel"
					/>
					<PrimaryInputProps
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
						name="lastName"
						label="Sobrenome"
						placeholder="Silva"
					/>
				</div>
				<Spacer height="4" />
				<PrimaryInputProps
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					name="email"
					label="E-mail"
					placeholder="manuelsilva@gmail.com"
				/>
				<Spacer height="4" />
				<Button colorScheme="teal" width="100%" onClick={submit}>
					Enviar
				</Button>
			</form>
			<Spacer width="6" maxWidth="6" />
			<div className="product-details">
				<h2>Plano Mensal</h2>
				<Spacer height="4" />
				<p>Você irá pagar</p>
				<span>R$ 300,00</span>
				<Spacer height="4" />
				<p>
					Regras: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Saepe perferendis laboriosam aperiam officia temporibus consequuntur
					voluptates.
				</p>
			</div>
		</div>
	)
}

export default App
