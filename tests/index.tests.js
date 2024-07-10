const Arena = require('../modules/arena')

describe('Arena Class',()=>{

    describe(' Add Player Method',()=>{

        let A;

        beforeEach(() => {
            A = new Arena();
        });
        
        test('Health of a player can not less than 1', () => {
            let id = A.addPlayer('A', -8, 900, 12);
            expect(id).toEqual(-1);
            
            id = A.addPlayer('A', 0, 200, 18);
            expect(id).toEqual(-1);
        });

        test('Strength of a player can not less than 1', () => {
            let id = A.addPlayer('A', 1000, -20, 24);
            expect(id).toEqual(-1);
            
            id = A.addPlayer('A', 290, 0, 12);
            expect(id).toEqual(-1);
        });

        test('Attack of a player can not less than 1.', () => {
            let id = A.addPlayer('A', 800, 100, -10);
            expect(id).toEqual(-1);
            
            id = A.addPlayer('A', 9000, 100, 0);
            expect(id).toEqual(-1);
        });

        test('Newly added player to be added in Arena.', () => {
            const id = A.addPlayer('A', 1000, 2000, 10);
            expect(A.isPresent(id)).toEqual(true);
        });

        test('Player count must be added after adding new player', () => {
            const oldPlayerCount = A.getPlayersCount();
            A.addPlayer('A', 1000, 2000, 10);
            const newPlayerCount = A.getPlayersCount();
        
            expect(newPlayerCount).toEqual(oldPlayerCount + 1);
        });

    })


    describe('battle method',()=>{

          let A;

          beforeEach(()=>{
              A = new Arena();
          });

          test('Battle with same Player ID on both side',()=>{
            A.addPlayer('A', 10, 800, 100);
            expect(A.battle(1,1)).toEqual({});
          })

          test('Entered Player ID 2 does not exists in Arena',()=>{
            A.addPlayer('A', 10, 800, 100);
            expect(A.battle(3,1)).toEqual({});
          });

          test('Entered Player ID 1 does not exists in Arena',()=>{
            A.addPlayer('A', 10, 800, 100);
            expect(A.battle(1,9)).toEqual({});
          });

          test('Both Player ID does not exists in Arena',()=>{
            expect(A.battle(1,9)).toEqual({});
          });
          
          test('Normal Battle in Arena',()=>{
            A.addPlayer('A', 10, 30, 100);
            A.addPlayer('B', 10, 30, 100);

            const AllOutcomes = [{ winner: 1, loser: 2 }, { winner: 2, loser: 1 }];
            const res = A.battle(1, 2);
            expect(AllOutcomes).toContainEqual(res);
          });
          
    });


})