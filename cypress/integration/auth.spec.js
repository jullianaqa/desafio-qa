/// <reference types="cypress" />

describe('auth', () => {
    let key = ''
    let token = ''
    let boardShortLink = ''

    it('Authentication', ()=>{
        let resp = cy.request({
            method: 'GET',
            url: `https://api.trello.com/1/boards/${boardShortLink}?key=${key}&token=${token}`
        })

        resp.its('status').should('eq', 200)
    });

    it('List card', ()=>{
        let resp = cy.request({
            method: 'GET',
            url: `https://api.trello.com/1/boards/${boardShortLink}/lists?key=${key}&token=${token}`
        })

        resp.its('status').should('eq', 200)
    });
       
    it('Create card', ()=>{
        let resp = cy.request({
            method: 'POST',
            url: `https://api.trello.com/1/cards?idList=625468317a0d8a22c8287974&key=${key}&token=${token}`
        })

        resp.its('status').should('eq', 200)
    });

    it('Delete card', ()=>{
        let resp = cy.request({
            method: 'DELETE',
            url: `https://api.trello.com/1/cards/62546c9b3054083956fef640?&key=${key}&token=${token}`
        })

        resp.its('status').should('eq', 200)
    });
    
});
