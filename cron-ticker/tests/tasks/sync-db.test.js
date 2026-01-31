const syncDd = require("../../tasks/sync-db")


describe('pruebas en syncDb', () => { 
    test('debe de ejecutar el proceso 2 veces', () => { 
        syncDd()
        const times = syncDd()
        console.log('se llamo ',times)
        expect(times).toBe(2)
     })
 })