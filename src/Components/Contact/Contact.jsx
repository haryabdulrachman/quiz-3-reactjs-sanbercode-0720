import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <h1>Hubungi kami</h1>
      <div class="hubungikami">
        <ul>
          <li><strong>Kantor:</strong> Di jalan belum jadi</li>
          <li><strong>Nomer Telepon:</strong> 08XX-XXXX-XXXX</li>
          <li><strong>Email:</strong> email@contoh.com</li>
        </ul>
      </div>

      <h1>Kirimkan Pesan</h1>
      <form action="">
        <table>
          <tr>
            <td>Nama</td>
            <td><input type="text" placeholder="ex: Bambang sucipto" required />
            </td>
          </tr>

          <tr>
            <td>Email</td>
            <td><input type="email" placeholder="ex: bambangsucipto@email.com" required />
            </td>
          </tr>

          <tr>
            <td>Jenis Kelamin</td>
            <td>
              <input type="radio" required name="jeniskelamin" id="lakilaki" required />
              <label htmlFor="lakilaki">Laki-Laki</label>
              <br />
              <input type="radio" required name="jeniskelamin" id="perempuan" required />
              <label htmlFor="perempuan">Perempuan</label>
            </td>
          </tr>

          <tr>
            <td>Pesan Anda</td>
            <td><textarea placeholder="Isikan pesan anda..." name="pesan" cols="30" rows="10"></textarea>
            </td>
          </tr>

          <tr>
            <td>
              <input type="submit" value="Kirim" />
            </td>
          </tr>
        </table>
      </form>

    </div>
  )
}

export default Contact
