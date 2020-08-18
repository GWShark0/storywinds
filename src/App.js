import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="container mx-auto px-4">
      <div className="pt-24">
        <h1 className="text-4xl">Buttons</h1>
        <div className="mt-0 mb-4 text-gray-600">
          Examples of building buttons with Tailwind CSS.
        </div>
        <hr className="my-8 border-b-2 border-gray-200" />
        <div>
          <Button className="mr-2" size="sm">
            Small
          </Button>
          <Button className="mr-2">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
