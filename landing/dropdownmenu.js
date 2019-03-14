class Dropdown {
    constructor(element) {
      
      // Assign this.element to the dropdown element
      this.element = element;
      
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = this.element.querySelector('.dropdown-button');
      console.log(this.button)
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = this.element.querySelector('.dropdown-content');
      // console.log(this.content)
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', () => this.toggleContent()
      
    
  
      )
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle('dropdown-hidden');
    //   console.log(toggleContent('heyo'))
    }
    
    
  }
  
  
  
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

// const button = document.querySelector('button');
// console.log('button: ', button);
// const p = window.document.querySelectorAll('p');
// console.log('p: ', p);
// const classname = document.getElementsByClassName('dropdown-content')
// console.log('className', classname)

  