describe(' testé le profil marié avec ressource suffisante', () => {
    before(() => {
        cy.visit('https://www.younited-credit.com')
        cy.get('#projectSelect').select('FURNITURE').should('contain','')
        cy.get('#amount').select('10K')
        cy.get('#creditMaturity').select('M6')
        cy.contains('CONTINUER').click()
        cy.url().should('contain', '/email')
        cy.get('#email-input').type('cici@yopmail.com').should('have.value', 'cici@yopmail.com')
        cy.contains('Voir mon offre personnalisée').click()
        cy.url().should('contain', '/familysituation')
    })
    it('Marié, Propietaire...', () => {
        
        cy.get('#maritalStatus-input').select('MARRIED').should('contain','Marié(e)')
        cy.get('#childNumberPropal-input').select('1')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/housing')
    })
    it('Logement : Locataire', () => {
        cy.get('#housingStatus-input').select('HOME_OWNERSHIP_WITH_MORTGAGE').should('contain','Propriétaire (avec crédit immobilier en cours)')
        cy.get('#housingStatusFrom-input-month').type('10').should('have.value', '10')
        cy.get('#housingStatusFrom-input-year').type('2010').should('have.value', '2010')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/professionalsituation')
    })
    it('Situation proffetionnelle : Secteur privé', () => {
        cy.get('#activitySector-input').select('PRIVATE_SECTOR').should('contain','Salarié(e) du secteur privé')
        cy.get('#profession-input').select('SECURITY_GUARD').should('contain','Agent de sécurité')
        cy.get('#contractType-input').select('CDI')
        cy.get('#employedFrom-input-month').type('01').should('have.value', '01')
        cy.get('#employedFrom-input-year').type('2005').should('have.value', '2005')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/partnerprofession')
    })
    it('Situation proffetionnelle conjoint : Secteur privé', () => {
        cy.get('#partnerActivitySector-input').select('PRIVATE_SECTOR').should('contain','Salarié(e) du secteur privé')
        cy.get('#partnerProfession-input').select('SECURITY_GUARD').should('contain','Agent de sécurité')
        cy.get('#partnerContractType-input').select('CDI').should('contain','CDI')
        cy.get('#partnerEmployedFrom-input-month').type('06').should('have.value', '06')
        cy.get('#partnerEmployedFrom-input-year').type('2008').should('have.value', '2008')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/incomes')
    })
    it('Salaire', () => {
        cy.get('#mainIncome-input').type('1800').should('have.value', '1800')
        cy.get('#coIncome-input').type('1600').should('have.value', '1600')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/outcomes')
    })
    it('Montant du loyer', () => {
        cy.get('#mortgageAmount-input').type('800').should('have.value', '800')
        cy.get('#loanCount-input').select('0')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain','/bank')
    })
    it('Banque', () => {
        cy.get('#bankCode-input').select('CREDIT_AGRICOLE').should('contain','Crédit Agricole')
        cy.get('#bankFrom-input-year').type('2002').should('have.value','2002')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain','/identity')
    })
    it('Identité', () => {
        cy.get('#GENDERCODE_M').check({force:true})
        cy.get('#lastName-input').type('Cici').should('have.value','Cici')
        cy.get('#firstName-input').type('Titi').should('have.value','Titi')
        cy.get('#dateOfBirth-input-day').type('20').should('have.value','20')
        cy.get('#dateOfBirth-input-month').type('06').should('have.value','06')
        cy.get('#dateOfBirth-input-year').type('1980').should('have.value','1980')
        cy.get('#postalCode-input').type('33700').should('have.value','33700')
        cy.get('#city-input').select('3328133700').should('contain','MERIGNAC')
        cy.contains('Suite').click()
    })
    it('Identité conjoint', () => {
        cy.url().should('contain','/partneridentity')
        cy.get('#GENDERCODE_MME').check({force:true})
        cy.get('#lastName-input').type('Cici').should('have.value','Cici')
        cy.get('#maidenName-input').type('Didi').should('have.value','Didi')
        cy.get('#firstName-input').type('Katy').should('have.value','Katy')
        cy.get('#dateOfBirth-input-day').type('10').should('have.value','10')
        cy.get('#dateOfBirth-input-month').type('12').should('have.value','12')
        cy.get('#dateOfBirth-input-year').type('1982').should('have.value','1982')
        cy.get('#postalCode-input').type('33700').should('have.value','33700')
        cy.get('#city-input').select('3328133700').should('contain','MERIGNAC')
        cy.contains('Suite').click()
        //Contact
    })
    it('Contacte', () => {
        cy.url().should('contain','/contact')
        cy.get('#cellPhoneNumber-input').type('0651736111').should('have.value','0651736111')
        cy.get('#phoneNumber-input').type('0551736112').should('have.value','0551736112')
        cy.get('#address-input').type('route des roses').should('have.value',"route des roses")
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
         cy.get('#commercialOffer4').check({force:true})
         cy.contains('Suite').click() 
     })
})