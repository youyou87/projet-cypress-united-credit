describe('Pacs credit', () =>{
    let profile = require('../../fixtures/jdd/pacs')

    before('connection site test', () =>{
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('include', 'younited-credit')
        cy.get('title').should('contain', 'Le Crédit 100% en Ligne – Réponse en 24h | Younited Credit')
    })

    it("page d'accueil", () =>{
        cy.choix_user(profile.projet)
        cy.wait(3000)
        cy.buttonClick('CONTINUER')
    })

    it('Email', () =>{
        cy.urlWebSite('/email')
        cy.pageTitle('Younited Credit')
        cy.wait(3000)
        cy.emailUser(profile.identity)
        cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
        cy.wait(3000)
        cy.buttonClick('Voir mon offre personnalisée')
    })
    
    it('Situation familiale', () =>{
        cy.urlWebSite('/familysituation')
        cy.pageTitle('Younited Credit')
        cy.situation_familiale_user(profile.identity)
        cy.get('[type="checkbox"]')
            .uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('logement', () =>{
        cy.urlWebSite('/housing')
        cy.pageTitle('Younited Credit')
        cy.situation_user(profile.logement)
        cy.get('[type="checkbox"]').uncheck({force:true}) 
        cy.buttonClick('Suite')
    })

    it('Situation profetionnelle', () =>{
        cy.urlWebSite('/professionalsituation')
        cy.pageTitle('Younited Credit')
        cy.activityCeliba(profile.activityStatus, profile.activity)
        cy.get('#ISCOMPANYBANKRUPT_FALSE')
            .check({ force: true })
            .should('be.checked')
        cy.buttonClick('Suite')
    }) 

    if(profile.identity.maritalStatus != "SINGLE"){
        it('Partner Activity Sector Test', () =>{
            cy.urlWebSite('/partnerprofession')
            cy.pageTitle('Younited Credit')
            cy.activite_conjoint_user(profile.activityStatus_partenaire, profile.activity_partenaire)
            cy.buttonClick('Suite')
            
        })
   
    }
    it('Revenu', () =>{
        cy.urlWebSite('/incomes')
        cy.pageTitle('Younited Credit')
        cy.revenu_user({
            "isMariedOrPaced":true
        }, profile.activity, profile.logement, profile.activity_partenaire)
        cy.buttonClick('Suite')
    })
    it('loyer', () =>{
        cy.urlWebSite('/outcomes')
        cy.pageTitle('Younited Credit')
        cy.loyerUser(profile.situation_logement, profile.logement)
        cy.buttonClick('Suite')
    })
    it('Banque', () =>{
        cy.urlWebSite('/bank')
        cy.pageTitle('Younited Credit')
        cy.banque_user(profile.banque)
        cy.buttonClick('Suite')
    })
    it('Identité user', () =>{
        cy.urlWebSite('/identity')
        cy.pageTitle('Younited Credit')
        cy.identity(profile.identity)
        cy.buttonClick('Suite')
    })

    it('identity du partenaire', () =>{
        cy.urlWebSite('/partneridentity')
        cy.pageTitle('Younited Credit')
        cy.identity_Partner(profile.partnerStatus, profile.identity_partenaire)
        cy.buttonClick('Suite')
    })

    it('Contact', () =>{
        cy.urlWebSite('/contact')
        cy.pageTitle('Younited Credit')
        cy.contact( profile.identity)
        cy.buttonClick('Suite')
    })
    
    
})