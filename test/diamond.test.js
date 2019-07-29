import diamond from 'diamond';

describe('diamond', () => {
    describe('whole presentations', () => {
        it('diamond A', () => {
            expect(diamond('A')).toBe('A');
        });

        it('diamond B', () => {
            expect(diamond('B')).toBe(
                ' A \n' +
                'B B\n' +
                ' A ' 
            );
        });

        it('diamond C', () => {
            expect(diamond('C')).toBe(
                '  A  \n' +
                ' B B \n' +
                'C   C\n' +
                ' B B \n' +
                '  A  ' 
            );
        });
    });

    describe('top-half presentations', () => {
        function topHalfDiamond(c) {
            let lines = diamond(c).split('\n');
            return lines.slice(0, (lines.length + 1)/2).join('\n');
        }

        it('diamond A', () => {
            expect(topHalfDiamond('A')).toBe('A');
        });

        it('diamond B', () => {
            expect(topHalfDiamond('B')).toBe(' A \nB B');
        });

        it('diamond C', () => {
            expect(topHalfDiamond('C')).toBe('  A  \n B B \nC   C');
        });
    });
});
