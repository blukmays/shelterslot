import React, { Component } from 'react';



class Searchbar extends Component {
    state = {
        initialItems: [],
        items: []
    }

    filterList = (event) => {
        let items = this.state.initialItems;
        items = items.filter((item) => {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: items });
    }


    render() {

        return (
            <div>
                <form >
                    <input type="text" placeholder="Search" onChange={this.filterList} />
                </form>
            </div>

        );
    }
}
export default Searchbar;