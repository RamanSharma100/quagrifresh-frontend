import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "./Profile.css";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [area, setArea] = useState("");

  const { oldUser } = useSelector(
    (state) => ({
      oldUser: state.auth.user,
    }),
    shallowEqual
  );

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (id && !user) {
      const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
      axios
        .get(`${BACKEND_URL}/api/user/get/${id}`)
        .then((res) => {
          setUser(res.data.user);
          setName(res.data.user.name);
          setEmail(res.data.user.email);
          setPhone(res.data.user.phone);
          setAddress1(res.data.user.address && res.data.user.address.address1);
          setAddress2(res.data.user.address && res.data.user.address.address2);
          setPincode(res.data.user.address && res.data.user.address.pincode);
          setCity(res.data.user.address && res.data.user.address.city);
          setState(res.data.user.address && res.data.user.address.state);
          setCountry(res.data.user.address && res.data.user.address.country);
          setArea(res.data.user.address && res.data.user.address.area);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id, user]);

  if (!user) {
    return <h1 className="display-1 text-center">Loading Profile</h1>;
  }

  const handleSave = () => {
    const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
    axios
      .post(`${BACKEND_URL}/api/user/update/${id}`, {
        name,
        email,
        phone,
        address: {
          address1,
          address2,
          pincode,
          city,
          state,
          country,
          area,
        },
      })
      .then((res) => {
        toast.success("Profile Updated");
        setEdit(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <h1 className="display-2 text-center">User Profile</h1>
      <div class="row ">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            {user.avatar ? (
              <img
                class="rounded-circle mt-5"
                width="150px"
                src={user.avatar}
              />
            ) : (
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
            )}
            <span class="font-weight-bold">{user.name}</span>
            <span class="text-black-50">{user.email}</span>
            <span
              onClick={() => toast.info("This feature coming soon!")}
              class="btn btn-block btn-sm mt-4 w-100 btn-outline-primary"
            >
              Follow
            </span>
            <span className="badge mt-4 w-100 bg-success">{user.type}</span>
            <span className="badge mt-2 w-100 bg-primary">
              <i className="far fa-star me-2"></i>
              0.0 Rating
            </span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">{edit && "Update "} Profile</h4>
            </div>
            <div class="col-md-12 my-2">
              <label class="labels">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!edit}
              />
            </div>

            <div class="row mt-3">
              <div class="col-md-12 my-2">
                <label class="labels">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!edit}
                />
              </div>
              <div class="col-md-12 my-2">
                <label class="labels">Address Line 1</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  disabled={!edit}
                />
              </div>
              <div class="col-md-12 my-2">
                <label class="labels">Address Line 2</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  disabled={!edit}
                />
              </div>
              <div class="col-md-12 my-2">
                <label class="labels">Pin code</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter pin code"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  disabled={!edit}
                />
              </div>
              <div class="col-md-12 my-2">
                <label class="labels">City/Town</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={!edit}
                />
              </div>
              <div class="col-md-12 my-2">
                <label class="labels">Area</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  disabled={!edit}
                />
              </div>
              <div class="col-md-12 my-2">
                <label class="labels">Email ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!edit}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Country</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={!edit}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">State/Region</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  disabled={!edit}
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              {edit && oldUser && oldUser?._id === id ? (
                <>
                  <button
                    onClick={handleSave}
                    class="btn btn-success profile-button"
                    type="button"
                  >
                    Save Profile
                  </button>
                  <button
                    onClick={() => setEdit(false)}
                    class="btn btn-outline-danger ms-5 profile-button"
                    type="button"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {oldUser && oldUser?._id === id && (
                    <button
                      onClick={() => setEdit(true)}
                      class="btn btn-primary profile-button"
                      type="button"
                    >
                      Edit Profile
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
