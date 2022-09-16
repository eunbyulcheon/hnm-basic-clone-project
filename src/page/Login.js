import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const Login = ({ setAuth }) => {
	const navigate = useNavigate();

	const loginUser = (e) => {
		e.preventDefault();
		setAuth(true);
		navigate('/');
	};

	return (
		<Container style={{ marginTop: '80px', width: '40%', margin: '0 auto' }}>
			<Form onSubmit={loginUser}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Button variant="outline-danger" type="submit">
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
