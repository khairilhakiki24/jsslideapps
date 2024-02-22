$(document).ready(function(){
    // Isi konten yang ingin ditampilkan
    var content = [
      {
        type: 'quote',
        text: '"tes"',
        author: 'Khairil hakiki'
      },
      {
        type: 'hadith',
        text: 'Sesungguhnya orang mukmin yang memiliki akhlak yang terbaik adalah orang yang paling baik di antara kamu yang berakhlak baik kepada istrinya.',
        reference: '- (HR. Tirmidzi)'
      },
      // Tambahkan konten lain sesuai kebutuhan
      {
        type: 'quote',
        text: '"Contoh kutipan lain"',
        author: 'Penulis Kutipan'
      },
      {
        type: 'youtube',
        videoId: 'xQBBbsAGooQ'
      },
      {
        type: 'image',
        imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2023/03/16/ilustrasi-bulan-ramadan_169.jpeg?w=600&q=90',
        altText: 'Deskripsi gambar',
        linkUrl: 'https://example.com/halaman-tujuan'
      }
    ];

    // Fungsi untuk membuat slide berdasarkan konten
    function createSlide(item) {
      var slide = '';
      if (item.type === 'quote') {
        slide += '<div class="content-container"><div class="quote-container"><div class="quote-text"><i class="fas fa-quote-left"></i> ' + item.text + ' <i class="fas fa-quote-right"></i></div><div class="author">' + item.author + '</div></div></div>';
      } else if (item.type === 'hadith') {
        slide += '<div class="content-container"><div class="hadith-container"><div class="hadith-text">' + item.text + '</div><div class="hadith-reference">' + item.reference + '</div></div></div>';
      } else if (item.type === 'youtube') {
        slide += '<div class="content-container"><div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + item.videoId + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>';
      } else if (item.type === 'image') {
        slide += '<div class="content-container"><div class="image-container"><a href="' + item.linkUrl + '"><img src="' + item.imageUrl + '" alt="' + item.altText + '"></a></div></div>';
      }
      return slide;
    }

    // Tambahkan konten ke dalam slider
    var slider = $('#content-slider');
    content.forEach(function(item) {
      slider.append(createSlide(item));
    });

    // Inisialisasi Owl Carousel
    slider.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true
    });
});
