import React from 'react'
import Media from './Media';

class data extends React.Component{
  render() {
    return (
        <div className="container">
            <br/>
            <br/>
            <h3 className="text-center">Kapan puncak pandemi akan terjadi setelah penerapan 'new normal'?</h3>
            <br/>
            <br/>
            <Media image="covid1.jpeg" title="Potensi penyebaran masih tinggi">  
            Kepala Pusat Pemodelan Matematika dan Simulasi Institut Teknologi Bandung (ITB), 
            Nuning Nuraini, mengatakan bahwa Indonesia sampai sekarang masih menjalani 
            gelombang pertama pandemi Covid-19. Lebih lagi, ia menyebut Angka Reproduksi, 
            atau tingkat penularan virus, masih berada di atas angka satu, meski sudah memasuki new normal.
            </Media>  
            <Media image="covid2.jpeg" title="Keterbatasan data">  
            Di sisi lain, ahli epidemiologi dari Fakultas Kesehatan Masyarakat (FKM) UI, 
            Pandu Riono mengkritisi penanganan pemerintah dalam menangani perkembangan 
            kasus yang ia sebut tidak memiliki indikator dan acuan jelas untuk memonitor 
            penekanan penyebaran, sehingga puncak pandemi tidak bisa diprediksi kapan akan terjadi.
            </Media>
            <Media image="covid3.jpeg" title="Perkiraan sementara">  
            Gugus Tugas Percepatan Penanganan Covid-19 meralat puncak pandemi yang sebelumnya 
            diprediksi terjadi pada bulan Juli, sementara pakar kesehatan menyebut jumlah kasus akan 
            terus menanjak hingga akhir tahun di tengah pemberlakuan 'new normal'.
            </Media>  
        </div>
    )
}
}
export default data;