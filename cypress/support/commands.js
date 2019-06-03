
/*
This command will get the search input, type the text and click on search icon.
*/
Cypress.Commands.add('searchBy', (text) => {
     cy.get('.nav-search-input')
        .type(text)
     cy.get('.nav-icon-search')
        .click()
})

/*
This method will get the Car names and ours links
*/

Cypress.Commands.add('getCarName', () => {
   
   cy.get('.item__info .main-title')
   .each((nome)=>{
     console.log('name:', nome.text())
   }) 
});

Cypress.Commands.add('getCarLinks', () => {
   var link_list
   cy.get('#searchResults li>div>a')
   .each((car_link) => {
     console.log('element: ',car_link.prop('href'))
   })
});
