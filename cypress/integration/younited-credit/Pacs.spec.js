describe('testé le profil Pacsé avec ressource suffisante', () => {
    before(() => {
        cy.visit('https://www.younited-credit.com')
        cy.get('#projectSelect').select('FURNITURE').should('contain','')
        cy.get('#amount').select('10K')
        cy.get('#creditMaturity').select('M6')
        cy.contains('CONTINUER').click()
        cy.url().should('contain', '/email')
        cy.get('#email-input').type('toctoc@yopmail.com').should('have.value', 'toctoc@yopmail.com')
        cy.contains('Voir mon offre personnalisée').click()
        cy.url().should('contain', '/familysituation')
    })
    it('Pacs, Logé chez le conjoint...', () => {
        
        cy.get('#maritalStatus-input').select('COHABITING').should('contain','Vie Maritale / PACS')
        cy.get('#childNumberPropal-input').select('1').should('contain','0')
        //cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/housing')
    })
    it('Logement : Loger par le conjoint', () => {
        cy.get('#housingStatus-input').select('LODGING_PROVIDED_BY_PARTNER').should('contain','Logé(e) par le(la) conjoint(e)')
        cy.get('#housingStatusFrom-input-month').type('04').should('have.value', '04')
        cy.get('#housingStatusFrom-input-year').type('2011').should('have.value', '2011')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/professionalsituation')
    })
    it('Situation proffetionnelle : Secteur privé', () => {
        cy.get('#activitySector-input').select('RETIRED').should('contain','Retraités')
        cy.get('#profession-input').select('RETIRED_FROM_PUBLIC_SECTOR').should('contain','Retraité du secteur public')
        cy.get('#pensionFrom-input-month').type('12').should('have.value', '12')
        cy.get('#pensionFrom-input-year').type('2015').should('have.value', '2015')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/partnerprofession')
    })
    it('Situation proffetionnelle conjoint : Secteur public', () => {
        cy.get('#partnerActivitySector-input').select('RETIRED').should('contain','Retraités')
        cy.get('#partnerProfession-input').select('RETIRED_FROM_PUBLIC_SECTOR').should('contain','Retraité du secteur public')
        cy.get('#partnerPensionFrom-input-month').type('12').should('have.value', '12')
        cy.get('#partnerPensionFrom-input-year').type('2017').should('have.value', '2017')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/incomes')
    })
    it('Salaire', () => {
        cy.get('#mainIncome-input').type('1500').should('have.value', '1500')
        cy.get('#coIncome-input').type('1600').should('have.value', '1600')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/outcomes')
    })
    it('Montant du loyer', () => {
        cy.get('#rentAmount-input').type('1000').should('have.value', '1000')
        cy.get('#loanCount-input').select('0').should('contain','0')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain','/bank')
    })
    it('Banque', () => {
        cy.get('#bankCode-input').select('CAISSE_D_EPARGNE').should('contain',"Caisse d'Epargne")
        cy.get('#bankFrom-input-year').type('2004').should('have.value','2004')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain','/identity')
    })
    it('Identité', () => {
        cy.get('#GENDERCODE_M').check({force:true})
        cy.get('#lastName-input').type('Toctoc').should('have.value','Toctoc')
        cy.get('#firstName-input').type('David').should('have.value','David')
        cy.get('#dateOfBirth-input-day').type('21').should('have.value','21')
        cy.get('#dateOfBirth-input-month').type('06').should('have.value','06')
        cy.get('#dateOfBirth-input-year').type('1982').should('have.value','1982')
        cy.get('#postalCode-input').type('33700').should('have.value','33700')
        cy.get('#city-input').select('3328133700').should('contain','MERIGNAC')
        cy.contains('Suite').click()
    })
    it('Identité conjoint', () => {
        cy.url().should('contain','/partneridentity'
        )
        cy.get('#GENDERCODE_MME').check({force:true})
        cy.get('#lastName-input').type('Toctoc').should('have.value','Toctoc')
        cy.get('#maidenName-input').type('Didi').should('have.value','Didi')
        cy.get('#firstName-input').type('Diana').should('have.value','Diana')
        cy.get('#dateOfBirth-input-day').type('12').should('have.value','12')
        cy.get('#dateOfBirth-input-month').type('10').should('have.value','10')
        cy.get('#dateOfBirth-input-year').type('1984').should('have.value','1984')
        cy.get('#postalCode-input').type('33700').should('have.value','33700')
        cy.get('#city-input').select('3328133700').should('contain','MERIGNAC')
        cy.contains('Suite').click()
        //Contact
    })
    it('Contacte', () => {
        cy.url().should('contain','/contact')
        cy.get('#cellPhoneNumber-input').type('0651736120').should('have.value','0651736120')
        cy.get('#phoneNumber-input').type('0551736120').should('have.value','0551736120')
        cy.get('#address-input').type('92 rue tartampion').should('have.value',"92 rue tartampion")
        cy.get('#postalCode-input').type('33700').should('have.value','33700')
        cy.get('#city-input').select('3328133700').should('contain','MERIGNAC')
        cy.get('#countryZone-input').select('FR').should('contain','France')
        cy.contains('Suite').click() 
    })
    it('Assurance', () => {
        // cy.url().should('contain','/contact')
         cy.get('#insurance-subscribers-input').select('YES_YES').should('contain','Pour mon co-emprunteur et moi')
         cy.get('#INSURANCE-JOBLOSS_YES').check({force:true})
         cy.contains('Suite').click() 
     })
     it('Autres offres', () => {
         // cy.url().should('contain','/contact')
          cy.get('#commercialOffer0').check({force:true})
          cy.contains('Suite').click() 
      })
 
})