import { PasswordValidator } from './password.validator';

describe('PasswordValidator', () => {
    it('create an instance', () => {
        const validator = new PasswordValidator();
        expect(validator).toBeTruthy();
    });
});
