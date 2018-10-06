import React, { Component } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

export default class InputDoc extends Component {
  render() {
    return (
      <div>
        <div className="mt-8 Comp">
          <div className="flex items-center">
            <div className="pr-16 font-bold">TextBox</div>
            <div className="flex-1 px-2">
              <TextBoxComponent />
            </div>
            <div className="flex-1 px-2">
              <TextBoxComponent placeholder="Name" />
            </div>
            <div className="flex-1 px-2">
              <TextBoxComponent
                placeholder="Last Name"
                showClearButton={true}
                floatLabelType="Auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 Comp">
          <div className="flex items-center">
            <div className="pr-16 font-bold">TextBox</div>
            <div className="flex-1 px-2">
              <div className="e-input-group">
                <input
                  className="e-input"
                  onFocus={this.floatFocus}
                  onBlur={this.floatBlur}
                  type="text"
                  placeholder="Date"
                />
                <span
                  className="e-input-group-icon e-input-calendar"
                  onMouseDown={this.onIconClick}
                  onMouseUp={this.onIconUnClick}
                />
              </div>
            </div>
            <div className="flex-1 px-2">
              <div className="e-float-input e-input-group">
                <input
                  type="text"
                  onFocus={this.floatFocus}
                  onBlur={this.floatBlur}
                  required
                />
                <span className="e-float-line" />
                <label className="e-float-text">Country</label>
                <span className="e-input-group-icon e-spin-down" />
              </div>
            </div>

            <div className="flex-1 px-2">
              <div className="e-input-group e-float-icon---left">
                <span className="e-input-group-icon e-input-picture" />
                <div className="e-input-in-wrap">
                  <input
                    className="e-input"
                    onFocus={this.floatFocus}
                    onBlur={this.floatBlur}
                    type="text"
                    placeholder="Upload Picture"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 px-2">
              <div className="e-input-group e-float-icon---left e-disabled">
                <span className="e-input-group-icon e-input-picture" />
                <div className="e-input-in-wrap">
                  <input
                    className="e-input"
                    onFocus={this.floatFocus}
                    onBlur={this.floatBlur}
                    type="text"
                    placeholder="Upload Picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
