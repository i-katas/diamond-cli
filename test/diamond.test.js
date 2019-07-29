import diamond from 'diamond';

describe('diamond', () => {
    it('single layered diamond', () => {
        expect(diamond('A')).toBe('A');
    });
});
