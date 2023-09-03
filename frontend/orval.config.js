module.exports = {
	backend: {
		output: {
			target: 'src/hooks/client.ts',
			client: 'react-query',
		},
		input: {
			target: 'http://localhost:5000/swagger-json',
		},
	},
};
