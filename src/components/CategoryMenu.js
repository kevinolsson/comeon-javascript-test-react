import React from 'react';

class CategoryMenu extends React.Component {
  state = {
    active: null,
    categories: {},
  }

  componentDidMount() {
    fetch('http://localhost:3001/categories', { method: 'get' })
      .then(response => response.json())
      .then((json) => {
        this.setState(
          prevState => ({
            categories: json,
          }),
        );
      });
  }

  handleClick = (value) => {
    const { updateFilter } = this.props;
    this.setState(
      prevState => ({
        active: value,
      }),
    );
    updateFilter(`categoryIds_like=${value}`);
  }

  render() {
    const { active, categories } = this.state;
    return (
      <div className="category-menu">
        <ul>
          {Object.keys(categories).map(key => (
            <li key={key} className={(active === categories[key].id) ? 'active' : null}>
              <button
                key={key}
                type="button"
                onClick={() => this.handleClick(categories[key].id)}
              >
                {categories[key].name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryMenu;
