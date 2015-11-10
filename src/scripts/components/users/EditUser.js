"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/userActions";
import Button from "../Button";
import InputField from "../InputField";
import InputFile from "../InputFile";
import "./editUser.css";
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
    this._dayChanged = this._dayChanged.bind(this);
    this._monthChanged = this._monthChanged.bind(this);
    this._yearChanged = this._yearChanged.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    let birthday = this.props.user.birth_date.split("-");
    this.state = { year: birthday[0], month: birthday[1], day: birthday[2], calendarDays: [] };
  }

  componentDidMount() {
    this._setCalendarDays(this.state.year, this.state.month);
  }

  _dayChanged(e) {
    const day = e.target.value;
    this.setState({day:day});
  }

  _monthChanged(e) {
    const month = e.target.value;
    this._setCalendarDays(this.state.year, month);
  }

  _yearChanged(e) {
    const year = e.target.value;
    this._setCalendarDays(year, this.state.month);
  }

  _setCalendarDays(year,month) {
    this.setState({year: year, month: month});
    if (year && month) {
      const calendarDaysForMonth = new Date(year, month, 0).getDate()
      const calendarDays = [];
      for(let i=1; i <= calendarDaysForMonth; i++) {
        calendarDays.push({value:i, name:i});
      }
      this.setState({calendarDays: calendarDays});
    }
  }

  _handleSubmit(event) {
    event.preventDefault();

    let avatar = this.refs.avatar.state.file;
    let birthdayYear = this.refs.birthdayYear.state.value;
    let birthdayMonth = this.refs.birthdayMonth.state.value;
    let birthdayDay = this.refs.birthdayDay.state.value;
    let birth_date = birthdayYear+"-"+birthdayMonth+"-"+birthdayDay;
    let email = this.refs.email.state.fieldValue;
    let gender = this.refs.gender.state.value;
    let id = this.props.user.id;
    let name = this.refs.name.state.fieldValue;
    let phone = this.refs.phone.state.fieldValue;
    let address = this.refs.address.state.fieldValue;
    let addressOther = this.refs.addressOther.state.fieldValue;
    let city = this.refs.city.state.fieldValue;
    let country = this.refs.country.state.fieldValue;
    let zipCode = this.refs.zipCode.state.fieldValue;

    if (email && name) {
      this.props.dispatch(updateUser({
        address: address,
        addressOther: addressOther,
        avatar: avatar,
        birth_date: birth_date,
        city: city,
        country: country,
        email: email,
        gender: gender,
        id: id,
        name: name,
        phone: phone,
        zipCode: zipCode
      }))
    };
  }

  _isGender(value) {
    return value === this.props.user.gender;
  }

  render() {
    const { user } = this.props;
    const { avatar, email, gender, name, phone, address, addressOther, city, country, zipCode } = user;

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
            ref="gender"
            value={gender}
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
              ref="birthdayYear"
              value={""+parseInt(this.state.year)}
              name="Year" />
            <Select 
              styles="birthday__select birthday__select-spacing" 
              onChange={this._monthChanged} 
              options={this.props.months} 
              id="birthday-month" 
              ref="birthdayMonth"
              value={""+parseInt(this.state.month)}
              name="Month" />
            <Select 
              styles="birthday__select" 
              disabled={!this.state.calendarDays.length} 
              key={this.state.calendarDays.length} 
              onChange={this._dayChanged}
              options={this.state.calendarDays} 
              id="birthday-day" 
              ref="birthdayDay"
              value={""+parseInt(this.state.day)}
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
            ref="addressOther" />
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
          <button 
          name="Save" 
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary signup-button" 
          type="submit" >
          Save
          </button>
        </div>
      </form>
    )
  }
}

export default connect()(EditUser);
