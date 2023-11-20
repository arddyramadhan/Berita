import { configureStore } from '@reduxjs/toolkit'
import kategoriReducer from '../feature/kategoriSlice';
import pembayaranReducer from '../feature/pembayaranSlice'
import produkReducer from '../feature/produkSlice';
import transaksiReducer from '../feature/transaksiSlice';
import authSlice from '../feature/authSlice';
import pemesananReducer from './../feature/pemesananSlice';
import keranjangReducer from './../feature/keranjangSlice';
import beritaReducer from '../feature/beritaSlice';
import penggunaReducer from '../feature/penggunaSlice';
import kegiatanReducer from '../feature/kegiatanSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        produk: produkReducer,
        pembayaran: pembayaranReducer,
        transaksi: transaksiReducer,
        pemesanan: pemesananReducer,
        kategori: kategoriReducer,
        keranjang :keranjangReducer,
        berita :beritaReducer,
        pengguna: penggunaReducer, 
        kegiatan:kegiatanReducer
    },
})