"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/userActions";
import Button from "../Button";
import InputField from "../InputField";
import InputFile from "../InputFile";
import "./EditUser.css";
import Select from "../Select";

class EditUser extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  static defaultProps = {
    months : [
      {value:1, name:"January"},
      {value:2, name:"February"},
      {value:3, name:"March"},
      {value:4, name:"April"},
      {value:5, name:"May"},
      {value:6, name:"June"},
      {value:7, name:"July"},
      {value:8, name:"August"},
      {value:9, name:"September"},
      {value:10, name:"October"},
      {value:11, name:"November"},
      {value:12, name:"December"}
    ],
    years : function() {
      let years = [];
      for(let i= new Date().getFullYear(); i > 1900; i--) {
        years.push({value:i, name:i});
      }
      return years;
    }
  }

  constructor(props) {
    super(props);
    this._monthChanged = this._monthChanged.bind(this);
    this._yearChanged = this._yearChanged.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    this.state = { month: false, year: false, calendarDays: [] };
  }

  _monthChanged(e) {
    const month = e.target.value;
    this.setState({month: month});
    this._setCalendarDays(this.state.year, month);
  }

  _yearChanged(e) {
    const year = e.target.value;
    this.setState({year: year});
    this._setCalendarDays(year, this.state.month);
  }

  _setCalendarDays(year,month) {
    if (year && month) {
      const calendarDaysForMonth = new Date(year, month, 0).getDate()
      const calendarDays = [];
      for(let i=1; i <= calendarDaysForMonth; i++) {
        calendarDays.push({value:i, name:i});
      }
      this.setState({calendarDays: calendarDays});
    }
  }

  _getGender() {
    let radios = document.getElementsByName("gender");
    for (let key in radios) {
      if (radios[key].checked === true) return radios[key].value;
    }
  }

  _handleSubmit(event) {
    event.preventDefault();

    let avatar = this.refs.avatar.state.file;
    let birthDay = this.refs.birthDay.state.fieldValue;
    let email = this.refs.email.state.fieldValue;
    let gender = this._getGender();
    let id = this.props.user.id;
    let name = this.refs.name.state.fieldValue;

    if (email && name) {
      this.props.dispatch(updateUser({
        avatar: avatar,
        birth_date: birthDay,
        gender: gender,
        email: email,
        id: id,
        name: name
      }))
    };
  }

  _isGender(value) {
    return value === this.props.user.gender;
  }

  render() {
    const { user } = this.props;
    const { avatar, birth_date, email, gender, name, phone, address, addressOther, city, country, zipCode } = user;

    return (
      <form className="edit-user block--center-horizontally__margin" onSubmit={this._handleSubmit}>
        <div>
          <InputField
            fieldId="name"
            fieldName="Full name"
            fieldType="text"
            fieldValue={name}
            ref="name" />
        </div>
        <div>
          <Select 
            styles="gender__select"
            options={[{value:"M", name:"Male"},{value:"F", name:"Female"},{value:"O", name:"Other"}]} 
            id="Gender" 
            name="I am" />
        </div>
        <div>
          <label>Birthday</label>
          <div>
            <Select 
              styles="birthday__select" 
              onChange={this._yearChanged} 
              options={this.props.years()} 
              id="birthday-year" 
              name="Year" />
            <Select 
              styles="birthday__select birthday__select-spacing" 
              onChange={this._monthChanged} 
              options={this.props.months} 
              id="birthday-month" 
              name="Month" />
            <Select 
              styles="birthday__select" 
              disabled={!this.state.calendarDays.length} 
              key={this.state.calendarDays.length} 
              options={this.state.calendarDays} 
              id="birthday-day" 
              name="Day" />
          </div>
        </div>
        <div>
          <InputField
            fieldId="email"
            fieldName="Email"
            fieldType="text"
            fieldValue={email}
            ref="email" />
        </div>
        <div>
          <InputField
            fieldId="phone"
            fieldName="Phone"
            fieldType="text"
            fieldValue={phone}
            ref="phone" />
        </div>
        <div>
          <InputField
            fieldId="address"
            fieldName="Address"
            fieldType="text"
            fieldValue={address}
            ref="address" />
        </div>
        <div>
          <InputField
            fieldId="address-other"
            fieldName="Address"
            fieldType="text"
            fieldValue={addressOther}
            ref="address-other" />
        </div>
        <div>
          <InputField
            fieldId="city"
            fieldName="City"
            fieldType="text"
            fieldValue={city}
            ref="city" />
        </div>
        <div>
          <InputField
            fieldId="zipCode"
            fieldName="Postal/Zip Code"
            fieldType="text"
            fieldValue={zipCode}
            ref="zipCode" />
        </div>
        <div>
          <InputField
            fieldId="country"
            fieldName="Country"
            fieldType="text"
            fieldValue={country}
            ref="country" />
        </div>
        <div>
          <img className="user__avatar" src={avatar} alt="" />
        </div>
        <div>
          <InputFile ref="avatar" />
        </div>
        <div className="text--center">
          <Button name="Save" type="submit" />
        </div>
      </form>
    )
  }
}

export default connect()(EditUser);
