describe('addproduct', () => {
  it('user adds a product', () => {
    cy.visit('http://localhost:3000')
    cy.get('input.prod').type('Computer')
    cy.get('input.price').type('$200')
    cy.get('input.quantity').type('200')
    cy.get('button[type="submit"]').click()
    //send a request to localhost:8080/api/cities/add
    cy.request('POST', 'localhost:8080/products/add', {
      name: 'Computer',
      price: '$200',
      quantity: '200'
    })

    //check if it displays a success message
    // cy.get('div.Toastify__toast-body').should('contain', 'product added successfully')

    //check if the product is added
    

  })
})