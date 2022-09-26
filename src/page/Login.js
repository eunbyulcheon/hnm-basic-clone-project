import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { useState } from 'react';

const Login = () => {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const loginUser = (e) => {
		e.preventDefault();
		dispatch(authenticateAction.login(id, pw));
		navigate('/');
	};

	return (
		<Container style={{ marginTop: '80px', width: '40%', margin: '0 auto' }}>
			<Form onSubmit={loginUser}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={(e) => setId(e.target.value)}
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={(e) => setPw(e.target.value)}
					/>
				</Form.Group>
				<Button variant="outline-danger" type="submit">
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
