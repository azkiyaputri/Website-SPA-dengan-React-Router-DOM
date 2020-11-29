import React from 'react'

class beranda extends React.Component{
  render() {
    return (
        <div>
           <div class="container">
               <br/>
               <br/>
               <br/>
               <br/>
               <h1 className="text-center">Apa itu virus corona?</h1>
               <br/>
                <h5>
                COVID-19 adalah penyakit yang disebabkan oleh virus severe acute respiratory syndrome coronavirus 2
                (SARS-CoV-2). COVID-19 dapat menyebabkan gangguan sistem pernapasan, mulai dari gejala yang ringan 
                seperti flu, hingga infeksi paru-paru, seperti pneumonia.
                </h5>
               <br/>
                <ul>
                    <li>
                        <h2>Informasi kesehatan</h2>
                        <p>Identifikasi diri untuk melakukan pencegahan</p>
                    </li>
                </ul>
            </div>
            <br/>
            <div class="container">
                <div class="row">
                    <div class="card col-sm-4">
                        <div class="card-header bg-success text-white text-center">
                            GEJALA
                        </div>
                        <div class="bard-body">
                        Masing-masing orang memiliki respons yang berbeda terhadap COVID-19. 
                        Sebagian besar orang yang terpapar virus ini akan mengalami gejala 
                        ringan hingga sedang, dan akan pulih tanpa perlu dirawat di rumah sakit.
                        <p>Gejala yang paling umum:</p>
                        demam,
                        batuk kering,
                        kelelahan
                        </div>
                        <div class="card-header bg-success text-white text-center">
                            - - - - - - - - - -
                        </div>
                    </div>
                    <div class="card col-sm-4">
                        <div class="card-header bg-success text-white text-center">
                            PENCEGAHAN
                        </div>
                        <div class="bard-body">
                        Lindungi diri Anda dan orang lain di sekitar Anda dengan mengetahui fakta-fakta terkait virus ini 
                        dan mengambil langkah pencegahan yang sesuai. Ikuti saran yang diberikan oleh otoritas kesehatan setempat.
                        Masker dapat membantu mencegah penyebaran virus dari orang yang mengenakannya kepada orang lain. 
                        Dan jangan lupa selalu rajin mencuci tangan dengan sabun. 
                        </div>
                        <div class="card-header bg-success text-white text-center">
                            - - - - - - - - - -
                        </div>
                    </div>
                    <div class="card col-sm-4">
                        <div class="card-header bg-success text-white text-center">
                            PERAWATAN
                        </div>
                        <div class="bard-body">
                        Perawatan diri
                        Jika Anda merasa sakit, Anda harus beristirahat, minum banyak air, dan makan makanan bergizi. 
                        Gunakan ruangan yang terpisah dari anggota keluarga Anda, dan jika memungkinkan gunakan kamar mandi khusus. 
                        Bersihkan dan lakukan disinfeksi pada permukaan benda yang sering disentuh.
                        Semua orang harus menjaga pola hidup sehat di rumah. 
                        </div>
                        <div class="card-header bg-success text-white text-center">
                            - - - - - - - - - -
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default beranda;