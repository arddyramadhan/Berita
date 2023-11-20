import React from "react"
import Baner from "../../components/Baner"

const Kontak = () => {
    return (
        <>
            <Baner title={"Kontak"} sub={"Kontak"} />
            <section className='contact-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='contact-box'>
                                <div className='section-tagline'>WRITE A MESSAGE</div>
                                {/* section-tagline */}
                                <h1 className='section-title'>Always Here to Help you</h1>
                                <p>
                                    There are certain attributes of a profession and one has to catch hold of them in order to efficiently and grow in that business. I share my experience as an
                                    interior designer.{" "}
                                </p>
                            </div>
                            {/* contact-box */}
                        </div>
                        {/* col-lg-4 */}
                        <div className='col-lg-8'>
                            <form action='assets/inc/sendemail.php' className='contact-form  contact-form-validated' method='post'>
                                <div className='row row-gutter-10'>
                                    <div className='col-12 col-lg-6'>
                                        <input type='text' id='name' className='input-text' placeholder='Your name' name='name' aria-required='true' />
                                    </div>
                                    {/* col-12 col-lg-6 */}
                                    <div className='col-12 col-lg-6'>
                                        <input type='email' id='email' className='input-text' placeholder='Email address' name='email' aria-required='true' />
                                    </div>
                                    {/* col-12 col-lg-6 */}
                                    <div className='col-12 col-lg-6'>
                                        <input type='text' id='phone' className='input-text' placeholder='Phone number' name='phone' aria-required='true' />
                                    </div>
                                    {/* col-12 col-lg-6 */}
                                    <div className='col-12 col-lg-6'>
                                        <input type='text' id='subject' className='input-text' placeholder='Subject' name='subject' aria-required='true' />
                                    </div>
                                    {/* col-12 col-lg-6 */}
                                    <div className='col-12 col-lg-12'>
                                        <textarea name='message' placeholder='Write a message' className='input-text' aria-required='true' defaultValue={""} />
                                    </div>
                                    {/* col-12 col-lg-12 */}
                                    <div className='col-12 col-lg-12'>
                                        <button className='btn btn-primary'>Send a Message</button>
                                    </div>
                                    {/* col-12 col-lg-12 */}
                                </div>
                                {/* row */}
                            </form>
                            {/* contact-form */}
                        </div>
                        {/* col-lg-8 */}
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </section>
            <div className='contact-gmap-section'>
                <div className='container'>
                    <div style={{ width: "100%" }}>
                        <iframe
                            width='100%'
                            height={600}
                            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=JXHJ+R9Q,%20kolonel%20rauf%20mo'o,%20Kayubulan,%20Kec.%20Limboto,%20Kabupaten%20Gorontalo,%20Gorontalo%2096214,%20Indonesia+(Badan%20Keuangan%20Kabupaten%20Gorontalo)&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kontak
