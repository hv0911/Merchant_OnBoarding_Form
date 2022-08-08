import { Typography } from '@mui/material';
import './App.css';
import { useForm } from "react-hook-form";



function App() {



  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data)=>{
      console.log(data)
    
  }

  console.log(errors)

  



  return (
    <div className="App">
      <div className='form-container' >
        <header className="App-header">
          <Typography gutterBottom variant='h4' style={{ margin: '1vmax', paddingTop: '1vmax', fontWeight: '600' }}>Ecommerce - Merchant Onboarding</Typography>
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-input'>
            <label >
              <p className='required'>Legal Name Of The Establishment for the Agreement (As Per Registration Certificate)</p>
              <input type='text' {...register("Name", {required: 'this field is required', maxLength: 80})} />
              {errors.Name && (<small>{errors.Name.message}</small>)}
            </label>
          </div>

          <div className='form-input'>
            <label>
              <p className='required'> Type of Entity   </p>

              <select style={{ padding: '5px' }} {...register("EntityName", {required: 'this field is required'})}  >
                <option value=''>select...</option>
                <option value="Proprietorship">Proprietorship</option>
                <option value="Public">Public & Private</option>
                <option value="Partenship/LLB">Partenship/LLB</option>
                <option value="Society/Trust">Society/Trust</option>
                <option value="HUF">HUF</option>
              </select>
              {errors.EntityName && (<small >{errors.EntityName.message}</small>)}
            </label>
          </div>

          <div className='form-input'>

            <label >
              <p className='required'>Shop Name/Display Name</p>
              <input type='text' {...register("displayName", {required: 'this field is required', maxLength: 80})} />
              {errors.displayName && (<small >{errors.displayName.message}</small>)}

              <p className='dull'>Name required to reflect in the time of payments</p>
            </label>
          </div>



          <div className='form-input scroll'>

            <label >
              <p >Business Category </p>


              <select

                className='category '
                {...register("category")} 
              >
                <option ></option>
                <option value="AutoMobiles">AutoMobiles and Vehicles</option>
                <option value="Beauty">Beauty and Wellness</option>
                <option value="Business">Business Services</option>
                <option value="Education">Education </option>
                <option value="Entertainment">Entertainment</option>
                <option value="Food">Food</option>
                <option value="Petrol">Gas and Petrol</option>
                <option value="KiranaStore">Kirana Store</option>

              </select>

            </label>




          </div>

          <div className='form-input'>

            <label>
              <p className='required'>Primary Number</p>
              <input placeholder='Primary Number' type='tel'  {...register("Number", {required: 'this field is required', minLength: 6, maxLength: 12})}/>
              {errors.Number && (<small >{errors.Number.message}</small>)}
            </label>
          </div>


          <div className='form-input'>
            <label>
              <p className='required'>Business Spoc Name(Primary) </p>
              <input type='text' placeholder='Business Spoc Name' {...register("PrimaryName", {required: 'this field is required', maxLength: 80})} />
              {errors.PrimaryName && (<small >{errors.PrimaryName.message}</small>)}
            </label>
          </div>


          <div className='form-input'>
            <label>
              <p >Secondary Number</p>
              <input placeholder='Secondary Number' type='tel' {...register("SecondaryNumber", {required: false, minLength: 6, maxLength: 12})}/>
            </label>
          </div>

          <div className='form-input'>
            <label>
              <p >Business Spoc Name(Secondary) </p>
              <input type='text' placeholder='Business Spoc Name'  {...register("spocNameSecondary", {required: false, maxLength: 80})}/>
            </label>
          </div>

          <div className='form-input'>
            <label>
              <p className='required'  >Business Spoc Email Address </p>
              <input type='text' {...register("spocEmail", {required: true, pattern: /^\S+@\S+$/i})}/>
              {errors.spocEmail && (<small >{errors.spocEmail.message}</small>)}
            </label>
          </div>

          <div className='form-input'>
            <label>
              <p className='required' >Tech Spoc Name  </p>
              <input type='text'  {...register("techShocName", {required: 'this field is required', maxLength: 80})}/>
              {errors.techShocName && (<small >{errors.techShocName.message}</small>)}
            </label>
          </div>


          <div className='form-input'>
            <label>
              <p className='required' >Tech Spoc Email  </p>
              <input type='text' {...register("spocTechEmail", {required: true, pattern: /^\S+@\S+$/i})}/>
              {errors.spocTechEmail && (<small >{errors.spocTechEmail.message}</small>)}
              <p className='dull'>example@example.com</p>
              
            </label>
          </div>


          <div className='form-input'>
            <label>
              <p className='required'   >Tech Spoc Mobile  </p>
              <input  type='tel' {...register("techMobileNumber", {required: false, minLength: 6, maxLength: 12})}/>
              {errors.techMobileNumber && (<small >{errors.techMobileNumber.message}</small>)}

            </label>
          </div>


          <div className='line'></div>
          <div style={{ height: '10vh', display: 'flex', alignItems: 'center' }} >
            <Typography variant='h3' style={{ margin: '1vmax', }} >Legal Address</Typography>
          </div>
          <div className='line'></div>

          <div className='form-input'>
            <label>
              <p className='required' >Legal Address  </p>
              <input type='text'  {...register("address", {required: 'this field is required', maxLength: 60})}/>
              {errors.address && (<small >{errors.address.message}</small>)}

            </label>
          </div>


          <div className='form-input'>
            <label>
              <p className='required'  >Legal area/sector/village  </p>
              <input text  {...register("village", {required: 'this field is required', maxLength: 60})}/>
              {errors.village && (<small >{errors.village.message}</small>)}

            </label>
          </div>

          <div className='form-input'>
            <label>
              <p className='required' >Legal state  </p>
              <select style={{ padding: '5px' }} {...register("state",{required:true})} >
                <option></option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>

              </select>
            </label>
          </div>

          <div className='form-input'>
            <label>
              <p className='required' >Legal city  </p>
              <select style={{ padding: '5px' }} {...register("city",{required:true})} >
                <option></option>


                <option value="">Select City</option>
                <option value="Agar">Agar</option>
                <option value="Ajaigarh">Ajaigarh</option>
                <option value="Akodia">Akodia</option>
                <option value="Alampur">Alampur</option>
                <option value="Alirajpur">Alirajpur</option>
                <option value="Alot">Alot</option>
                <option value="Amanganj">Amanganj</option>
                <option value="Amarkantak">Amarkantak</option>
                <option value="Amarpatan">Amarpatan</option>
                <option value="Amarwara">Amarwara</option>
                <option value="Ambah">Ambah</option>
                <option value="Amla">Amla</option>
                <option value="Anjad">Anjad</option>
                <option value="Antri">Antri</option>
                <option value="Anuppur">Anuppur</option>
                <option value="Aron">Aron</option>
                <option value="Ashoknagar">Ashoknagar</option>
                <option value="Ashta">Ashta</option>
                <option value="Babai">Babai</option>
                <option value="Badarwas">Badarwas</option>
                <option value="Badnawar">Badnawar</option>
                <option value="Bag">Bag</option>
                <option value="Bagli">Bagli</option>
                <option value="Baihar">Baihar</option>
                <option value="Baikunthpur">Baikunthpur</option>
                <option value="Bakshwaho">Bakshwaho</option>
                <option value="Balaghat">Balaghat</option>
                <option value="Baldeogarh">Baldeogarh</option>
                <option value="Bamna">Bamna</option>
                <option value="Bamor Kalan">Bamor Kalan</option>
                <option value="Bamora">Bamora</option>
                <option value="Banda">Banda</option>
                <option value="Barela">Barela</option>
                <option value="Barghat">Barghat</option>
                <option value="Bargi">Bargi</option>
                <option value="Barhi">Barhi</option>
                <option value="Barwani">Barwani</option>
                <option value="Basoda">Basoda</option>
                <option value="Begamganj">Begamganj</option>
                <option value="Beohari">Beohari</option>
                <option value="Berasia">Berasia</option>
                <option value="Betma">Betma</option>
                <option value="Betul">Betul</option>
                <option value="Betul Bazar">Betul Bazar</option>
                <option value="Bhabhra">Bhabhra</option>
                <option value="Bhainsdehi">Bhainsdehi</option>
                <option value="Bhander">Bhander</option>
                <option value="Bhanpura">Bhanpura</option>
                <option value="Bhawaniganj">Bhawaniganj</option>
                <option value="Bhikangaon">Bhikangaon</option>
                <option value="Bhind">Bhind</option>
                <option value="Bhitarwar">Bhitarwar</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Biaora">Biaora</option>
                <option value="Bijawar">Bijawar</option>
                <option value="Bijrauni">Bijrauni</option>
                <option value="Bodri">Bodri</option>
                <option value="Burhanpur">Burhanpur</option>
                <option value="Burhar">Burhar</option>
                <option value="Chanderi">Chanderi</option>
                <option value="Chandia">Chandia</option>
                <option value="Chandla">Chandla</option>
                <option value="Chhatarpur">Chhatarpur</option>
                <option value="Chhindwara">Chhindwara</option>
                <option value="Chichli">Chichli</option>
                <option value="Chorhat">Chorhat</option>
                <option value="Daboh">Daboh</option>
                <option value="Dabra">Dabra</option>
                <option value="Damoh">Damoh</option>
                <option value="Datia">Datia</option>
                <option value="Deori Khas">Deori Khas</option>
                <option value="Depalpur">Depalpur</option>
                <option value="Dewas">Dewas</option>
                <option value="Dhamnod">Dhamnod</option>
                <option value="Dhana">Dhana</option>
                <option value="Dhar">Dhar</option>
                <option value="Dharampuri">Dharampuri</option>
                <option value="Dindori">Dindori</option>
                <option value="Etawa">Etawa</option>
                <option value="Gadarwara">Gadarwara</option>
                <option value="Garha Brahman">Garha Brahman</option>
                <option value="Garhakota">Garhakota</option>
                <option value="Gautampura">Gautampura</option>
                <option value="Ghansor">Ghansor</option>
                <option value="Gogapur">Gogapur</option>
                <option value="Gohadi">Gohadi</option>
                <option value="Govindgarh">Govindgarh</option>
                <option value="Guna">Guna</option>
                <option value="Gurh">Gurh</option>
                <option value="Gwalior">Gwalior</option>
                <option value="Harda">Harda</option>
                <option value="Harda Khas">Harda Khas</option>
                <option value="Harpalpur">Harpalpur</option>
                <option value="Harrai">Harrai</option>
                <option value="Harsud">Harsud</option>
                <option value="Hatod">Hatod</option>
                <option value="Hatta">Hatta</option>
                <option value="Hindoria">Hindoria</option>
                <option value="Hoshangabad">Hoshangabad</option>
                <option value="Iawar">Iawar</option>
                <option value="Ichhawar">Ichhawar</option>
                <option value="Iklehra">Iklehra</option>
                <option value="Indore">Indore</option>
                <option value="Isagarh">Isagarh</option>
                <option value="Itarsi">Itarsi</option>
                <option value="Jabalpur">Jabalpur</option>
                <option value="Jaisinghnagar">Jaisinghnagar</option>
                <option value="Jaithari">Jaithari</option>
                <option value="Jamai">Jamai</option>
                <option value="Jaora">Jaora</option>
                <option value="Jatara">Jatara</option>
                <option value="Jawad">Jawad</option>
                <option value="Jhabua">Jhabua</option>
                <option value="Jiran">Jiran</option>
                <option value="Jobat">Jobat</option>
                <option value="Kailaras">Kailaras</option>
                <option value="Kaimori">Kaimori</option>
                <option value="Kannod">Kannod</option>
                <option value="Kareli">Kareli</option>
                <option value="Karera">Karera</option>
                <option value="Karrapur">Karrapur</option>
                <option value="Kasrawad">Kasrawad</option>
                <option value="Katangi">Katangi</option>
                <option value="Katni">Katni</option>
                <option value="Khachrod">Khachrod</option>
                <option value="Khailar">Khailar</option>
                <option value="Khajuraho Group of Monuments">Khajuraho Group of Monuments</option>
                <option value="Khamaria">Khamaria</option>
                <option value="Khandwa">Khandwa</option>
                <option value="Khandwa district">Khandwa district</option>
                <option value="Khargapur">Khargapur</option>
                <option value="Khargone">Khargone</option>
                <option value="Khategaon">Khategaon</option>
                <option value="Khilchipur">Khilchipur</option>
                <option value="Khirkiyan">Khirkiyan</option>
                <option value="Khujner">Khujner</option>
                <option value="Khurai">Khurai</option>
                <option value="Kolaras">Kolaras</option>
                <option value="Korwai">Korwai</option>
                <option value="Kotar">Kotar</option>
                <option value="Kothi">Kothi</option>
                <option value="Kotma">Kotma</option>
                <option value="Kotwa">Kotwa</option>
                <option value="Kukshi">Kukshi</option>
                <option value="Kumbhraj">Kumbhraj</option>
                <option value="Lahar">Lahar</option>
                <option value="Lakhnadon">Lakhnadon</option>
                <option value="Leteri">Leteri</option>
                <option value="Lodhikheda">Lodhikheda</option>
                <option value="Machalpur">Machalpur</option>
                <option value="Madhogarh">Madhogarh</option>
                <option value="Maheshwar">Maheshwar</option>
                <option value="Mahgawan">Mahgawan</option>
                <option value="Maihar">Maihar</option>
                <option value="Majholi">Majholi</option>
                <option value="Maksi">Maksi</option>
                <option value="Malhargarh">Malhargarh</option>
                <option value="Manasa">Manasa</option>
                <option value="Manawar">Manawar</option>
                <option value="Mandideep">Mandideep</option>
                <option value="Mandla">Mandla</option>
                <option value="Mandleshwar">Mandleshwar</option>
                <option value="Mandsaur">Mandsaur</option>
                <option value="Mangawan">Mangawan</option>
                <option value="Manpur">Manpur</option>
                <option value="Mau">Mau</option>
                <option value="Mauganj">Mauganj</option>
                <option value="Mihona">Mihona</option>
                <option value="Mohgaon">Mohgaon</option>
                <option value="Morar">Morar</option>
                <option value="Morena">Morena</option>
                <option value="Multai">Multai</option>
                <option value="Mundi">Mundi</option>
                <option value="Mungaoli">Mungaoli</option>
                <option value="Murwara">Murwara</option>
                <option value="Nagda">Nagda</option>
                <option value="Nagod">Nagod</option>
                <option value="Naigarhi">Naigarhi</option>
                <option value="Nainpur">Nainpur</option>
                <option value="Namli">Namli</option>
                <option value="Naraini">Naraini</option>
                <option value="Narayangarh">Narayangarh</option>
                <option value="Narsimhapur">Narsimhapur</option>
                <option value="Narsinghgarh">Narsinghgarh</option>
                <option value="Narwar">Narwar</option>
                <option value="Nasrullahganj">Nasrullahganj</option>
                <option value="Neemuch">Neemuch</option>
                <option value="Nepanagar">Nepanagar</option>
                <option value="Orchha">Orchha</option>
                <option value="Pachmarhi">Pachmarhi</option>
                <option value="Palera">Palera</option>
                <option value="Pali">Pali</option>
                <option value="Panagar">Panagar</option>
                <option value="Panara">Panara</option>
                <option value="Pandhana">Pandhana</option>
                <option value="Pandhurna">Pandhurna</option>
                <option value="Panna">Panna</option>
                <option value="Pansemal">Pansemal</option>
                <option value="Parasia">Parasia</option>
                <option value="Patan">Patan</option>
                <option value="Patharia">Patharia</option>
                <option value="Pawai">Pawai</option>
                <option value="Petlawad">Petlawad</option>
                <option value="Piploda">Piploda</option>
                <option value="Pithampur">Pithampur</option>
                <option value="Porsa">Porsa</option>
                <option value="Punasa">Punasa</option>
                <option value="Raghogarh">Raghogarh</option>
                <option value="Rahatgarh">Rahatgarh</option>
                <option value="Raisen">Raisen</option>
                <option value="Rajgarh">Rajgarh</option>
                <option value="Rajnagar">Rajnagar</option>
                <option value="Rajpur">Rajpur</option>
                <option value="Rampura">Rampura</option>
                <option value="Ranapur">Ranapur</option>
                <option value="Ratangarh">Ratangarh</option>
                <option value="Ratlam">Ratlam</option>
                <option value="Rehli">Rehli</option>
                <option value="Rehti">Rehti</option>
                <option value="Rewa">Rewa</option>
                <option value="Sabalgarh">Sabalgarh</option>
                <option value="Sagar">Sagar</option>
                <option value="Sailana">Sailana</option>
                <option value="Sanawad">Sanawad</option>
                <option value="Sanchi">Sanchi</option>
                <option value="Sanwer">Sanwer</option>
                <option value="Sarangpur">Sarangpur</option>
                <option value="Satna">Satna</option>
                <option value="Satwas">Satwas</option>
                <option value="Saugor">Saugor</option>
                <option value="Sausar">Sausar</option>
                <option value="Sehore">Sehore</option>
                <option value="Sendhwa">Sendhwa</option>
                <option value="Seondha">Seondha</option>
                <option value="Seoni">Seoni</option>
                <option value="Seoni Malwa">Seoni Malwa</option>
                <option value="Shahdol">Shahdol</option>
                <option value="Shahgarh">Shahgarh</option>
                <option value="Shahpur">Shahpur</option>
                <option value="Shahpura">Shahpura</option>
                <option value="Shajapur">Shajapur</option>
                <option value="Shamgarh">Shamgarh</option>
                <option value="Sheopur">Sheopur</option>
                <option value="Shivpuri">Shivpuri</option>
                <option value="Shujalpur">Shujalpur</option>
                <option value="Sidhi">Sidhi</option>
                <option value="Sihora">Sihora</option>
                <option value="Simaria">Simaria</option>
                <option value="Singoli">Singoli</option>
                <option value="Singrauli">Singrauli</option>
                <option value="Sirmaur">Sirmaur</option>
                <option value="Sironj">Sironj</option>
                <option value="Sitamau">Sitamau</option>
                <option value="Sohagi">Sohagi</option>
                <option value="Sohagpur">Sohagpur</option>
                <option value="Sultanpur">Sultanpur</option>
                <option value="Susner">Susner</option>
                <option value="Tal">Tal</option>
                <option value="Talen">Talen</option>
                <option value="Tarana">Tarana</option>
                <option value="Tekanpur">Tekanpur</option>
                <option value="Tendukheda">Tendukheda</option>
                <option value="Teonthar">Teonthar</option>
                <option value="Thandla">Thandla</option>
                <option value="Tikamgarh">Tikamgarh</option>
                <option value="Tirodi">Tirodi</option>
                <option value="Udaipura">Udaipura</option>
                <option value="Ujjain">Ujjain</option>
                <option value="Ukwa">Ukwa</option>
                <option value="Umaria">Umaria</option>
                <option value="Umaria District">Umaria District</option>
                <option value="Umri">Umri</option>
                <option value="Unhel">Unhel</option>
                <option value="Vidisha">Vidisha</option>
                <option value="Waraseoni">Waraseoni</option>
              </select>


            </label>
          </div>

          <div className='form-input'>
            <label>
              <p className='required' >Legal Pincode  </p>
              <input type='tel' {...register("pincode", {required: true, minLength: 6, maxLength: 12})}/>
            </label>
          </div>


          <div className='line'></div>
          <div style={{ height: '10vh', display: 'flex', alignItems: 'center' }} >
            <Typography variant='h3' style={{ margin: '1vmax' }} >Document</Typography>
          </div>
          <div className='line'></div>

          <div className='form-input'>
            <label>
              <p className='required' >Registration Certificate/Partnership Deed </p>
              <input style={{ padding: '10px' }} type='file' accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
              <p className='dull' style={{ width: '20vw' }}>
                Supportive documents as a company proof for Proprietorship can be  VAT certificate,  CST Certificate,  Shop establishment Act Certificate,  Regional State Registration certificate  Municipal Corporation Department Certificate/License  TIN Certificate  Utility Bill (Max. 2 months old)</p>
            </label>

          </div>


          <div className='form-input'>
            <label>
              <p className='required'  >Name of Authorized Signatory   </p>
              <input type='text' {...register("signatory",{required:"this field is required",maxLength:40})} />
              {errors.signatory && (<small >{errors.signatory.message}</small>)}

            </label>
          </div>

          <div className='form-input'>
            <label>
              <p className='required' >Signatory Authority Email ID  </p>
              <input type='text'  {...register("spocEmail", {required: true, pattern: /^\S+@\S+$/i})} />
              {errors.spocEmail && (<small >{errors.spocEmail.message}</small>)}

            </label>
          </div>

          <div className='form-input' >
            <p className='required' >Platform </p>
            <input type="checkbox"  {...register("platform")}/>
            <label  >Web</label>
          </div>

          <div className='form-input' style={{display:'flex',justifyContent:"center"}} >
            
              
              <input type='submit' value='Submit' id='submit'/>
           
          </div>





        </form>
      </div >


    </div >
  );
}

export default App;
