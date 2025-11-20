# 📱 Duygu Akışı – AI Günlük Asistanım  
React Native + HuggingFace AI ile duygu analizi yapan kişisel günlük uygulaması

Bu uygulama, kullanıcının yazdığı metni ücretsiz bir yapay zeka modeli ile analiz eder ve:  
- **Duygu Durumu (Pozitif / Nötr / Negatif)**  
- **Özet**  
- **Öneri**  
çıktıları üretir.  
Tüm veriler cihazda **AsyncStorage** ile saklanır.

---

## 🚀 Özellikler

### 📝 Günlük Analizi
- Kullanıcı metin yazar  
- HuggingFace Inference API’ye gönderilir  
- Model 5 sınıf döndürür  
- Uygulama bunu **3 sınıfa indirger**

### 📚 Geçmiş Ekranı
- Tüm önceki günlük analizleri listelenir  
- Duygu etiketi, tarih, özet, öneri ve orijinal metin görüntülenir  

### 💾  Depolama
- AsyncStorage kullanılır  
- Veriler cihazda saklanır  
- Uygulama kapansa bile kayıtlar kaybolmaz  

---

## 🧠 Kullanılan AI Modeli

**Model:** `tabularisai/multilingual-sentiment-analysis`  
**API:** HuggingFace Inference API (ücretsiz)

Model 5 adet duygu sınıfı döndürür:

- Very Positive  
- Positive  
- Neutral  
- Negative  
- Very Negative  

---

## 🎛 Uygulamanın Kullandığı Mantık

Model çıktıları **3 sınıfa indirgenir**:  
**positive**, **neutral**, **negative**

```ts
if (top.includes("positive")) return "positive";
if (top.includes("negative")) return "negative";
return "neutral";
```

### 📌 Dönüşüm Tablosu

| Modelin Çıktısı     | Uygulamadaki Karşılık |
|---------------------|------------------------|
| Very Positive       | positive               |
| Positive            | positive               |
| Neutral             | neutral                |
| Negative            | negative               |
| Very Negative       | negative               |

Bu sayede modern, minimal ve sade bir duygu göstergesi elde edilir.

---

## 🔐 Ortam Değişkenleri (.env)

`HF_API_KEY` ve `HF_MODEL_URL` dosyadan okunur:

```
HF_API_KEY=YOUR_KEY
HF_MODEL_URL=https://router.huggingface.co/hf-inference/models/tabularisai/multilingual-sentiment-analysis
```

`.env` **GitHub'a yüklenmez**, projeyi çalıştıracak kişi kendi key'ini ekler.

---

## 📦 Kurulum

### 1. Bağımlılıkları yükleyin
```
npm install
```

### 2. Env dosyasını oluşturun

### 3.
```
npx react-native-asset
```

### 4. Çalıştırın

**iOS**
```
npx react-native run-ios
```

**Android**
```
npx react-native run-android
```

---

## 📂 Klasör Yapısı

```
src/
  components/
  context/
  screens/
  services/
  utils/
  assets/

```

---


## 📸 Ekran Görüntüleri ve Video Bağlantısı

https://drive.google.com/drive/folders/18UoaoeddpRssyRoU1FoNbedlG2cjIhdk?usp=sharing
---

## 🧑‍💻 Geliştirici Notları

- Tasarım yaklaşımı minimal bir düzende kuruludur.  
- Proje geliştirilirken yapay zekadan faydalanılmıştır.

---

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.
