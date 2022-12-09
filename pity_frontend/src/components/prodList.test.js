import { render, screen } from "@testing-library/react";
import prodList from './prodList'
test('a title of list of registered cities is displayed', async () => {
    render(<prodList/>)
    const title = await screen.findByText(/List of registered Products/i)
    expect(title).toBeInTheDocument()
    // expect(screen.getByRole('heading')).toHaveTextContent('List of Registered Products')
  })

test('contains list of products', async () => {
    render(<prodList/>);

    expect(screen.getByRole('div')).toHaveTextContent('Computer')

});
