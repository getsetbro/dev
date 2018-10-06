import React, { Component } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

class DropdownDoc extends Component {
  constructor() {
    super(...arguments);
    this.list = [
      { Id: "game1", group: "Group A", icss: "e-a", Game: "Badminton" },
      { Id: "game2", group: "Group A", icss: "e-b", Game: "Football" },
      { Id: "game3", group: "Group B", icss: "e-c", Game: "Tennis" }
    ];

    // maps the appropriate column to fields property
    this.fields1 = { text: "Game", value: "Id" };
    this.fields2 = { text: "Game", value: "Id", groupBy: "group" };
    this.fields3 = { text: "Game", value: "Id", iconCss: "icss" };
  }
  render() {
    return (
      <div className="mt-8 Comp">
        <div className="flex items-center">
          <div className="pr-16 font-bold">Dropdown</div>
          <div className="flex-1 px-2">
            <DropDownListComponent
              placeholder="Select"
              dataSource={this.list}
              fields={this.fields1}
            />
          </div>
          <div className="flex-1 px-2">
            <DropDownListComponent
              placeholder="Select"
              dataSource={this.list}
              fields={this.fields2}
              enabled={false}
            />
          </div>
          <div className="flex-1 px-2">
            <DropDownListComponent
              placeholder="Select"
              dataSource={this.list}
              fields={this.fields3}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownDoc;
