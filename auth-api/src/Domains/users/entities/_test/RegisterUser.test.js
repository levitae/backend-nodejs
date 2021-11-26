const RegisterUser = require('../RegisterUser');

describe('a RegisterUser entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {
            username: 'abc',
            password: 'abc',
        };

        // Action and Assert
        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            username: 123,
            fullname: true,
            password: 'abc',
        };

        // Action and Assert
        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should throw error when username contains more than 50 characters', () => {
        // Arrange
        const payload = {
            username: 'testestestestestestestestestestestestestestestestest',
            fullname: 'testes',
            password: 'testes',
        };

        // Action and Assert
        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
    });

    it('should throw error when username contains restricted character', () => {
        // Arrange
        const payload = {
            username: 'test ing',
            fullname: 'testes',
            password: 'testes',
        };

        // Action and Assert
        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
    });

    it('should create registeruser object correctly', () => {
        // Arrange
        const payload = {
            username: 'testing',
            fullname: 'test name',
            password: 'testes',
        };

        // Action and Assert
        const { username, fullname, password } = new RegisterUser(payload);

        // Assert
        expect(username).toEqual(payload.username);
        expect(fullname).toEqual(payload.fullname);
        expect(password).toEqual(payload.password);

    });

});
