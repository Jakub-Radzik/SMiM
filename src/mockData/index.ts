import {airpods} from '../img/airpods';
import {appleWatch} from '../img/applewatch';
import {barber} from '../img/barber';
import {bt} from '../img/bluetooth';
import {doge} from '../img/doge';
import {eth} from '../img/eth';
import {krem, kremMain} from '../img/krem';
import {pendrive, pendriveMain} from '../img/pendrive';
import {pomatka, pomatkaMain} from '../img/pomatka';
import {swietlik} from '../img/swietlik';
import {usdt} from '../img/usdt';
import {xrp} from '../img/xrp';
import {Category, Product} from '../types';

export const CATEGORIES = [
  {title: Category.CAT1, icon: '📱'},
  {title: Category.CAT2, icon: '💄'},
  {title: Category.CAT3, icon: '🛍️'},
];

export const PRODUCTS: Record<Category, Product[]> = {
  [Category.CAT1]: [
    {
      id: '2',
      title: 'Apple Watch',
      price: 399,
      description:
        "Apple Watch to inteligentny zegarek, który jest doskonałym towarzyszem dla użytkowników iPhone'ów. Dzięki niemu możesz śledzić swoją aktywność fizyczną, monitorować stan zdrowia, odbierać powiadomienia, kontrolować muzykę, korzystać z aplikacji i wiele więcej. Jego wytrzymała konstrukcja zapewnia wodoodporność do 50 metrów, co pozwala na używanie go nawet podczas pływania. Wyposażony w najnowszy system operacyjny watchOS 8 oraz szeroki zakres sensorów, w tym GPS, EKG i barometr, Apple Watch umożliwia śledzenie i analizowanie różnych aspektów Twojego życia codziennego.",
      rate: 4,
      spec: {
        Kolor: 'Space Gray',
        Wodoodporność: 'Do 50 metrów',
        Ekran: 'Retina Always-On',
        Pamięć: '32 GB',
        Łączność: 'Wi-Fi, Bluetooth, LTE',
        'System operacyjny': 'watchOS 8',
        Sensory: 'GPS, Akcelerometr, Żyroskop, EKG, Barometr',
        Kompatybilność: 'iPhone 6s lub nowszy z iOS 15',
        Wymiary: '40 mm lub 44 mm',
      },
      images: {
        thumbnail: appleWatch[0],
        gallery: appleWatch,
      },
    },
    {
      id: '1',
      title: 'AirPods Pro',
      price: 249,
      rate: 5,
      spec: {
        Typ: 'Słuchawki douszne bezprzewodowe',
        'Aktywna redukcja hałasu': 'Tak',
        'Czas pracy na jednym ładowaniu':
          'Do 4.5 godziny (bez ANC i funkcji słuchania dźwięku przestrzennego)',
        'Czas pracy z etui ładującym': 'Do 24 godzin',
        Wodoodporność: 'IPX4 (odporność na pot i wodę)',
        'Sterowanie dotykowe': 'Tak (dotykowy sensor na słuchawkach)',
        Wymiary:
          '21.8 x 30.9 x 24 mm (słuchawka), 60.6 x 45.2 x 21.7 mm (etui)',
      },
      description:
        'AirPods Pro to nowoczesne, bezprzewodowe słuchawki douszne zaprojektowane przez Apple. Zawierają aktywną redukcję hałasu, zapewniając doskonałą jakość dźwięku bez zakłóceń z zewnątrz. Dzięki wbudowanym mikrofonom i czujnikom, AirPods Pro automatycznie dostosowują się do kształtu twoich uszu oraz środowiska, zapewniając wygodne i spersonalizowane doświadczenie słuchania. Są również odporne na pot i wodę, co sprawia, że są idealnym wyborem do aktywnego trybu życia. Dodatkowo, etui ładujące umożliwia wydłużenie czasu pracy, zapewniając nawet do 24 godzin słuchania muzyki na jednym ładowaniu.',
      images: {
        thumbnail: airpods[3],
        gallery: airpods,
      },
    },
    {
      id: '3',
      title: 'Pendrive Darth Vader 64 GB',
      price: 29,
      description:
        'Pendrive w kształcie Dartha Vadera to idealny gadżet dla fanów sagi Gwiezdnych Wojen. Wykonany z trwałego plastiku, jest nie tylko praktycznym nośnikiem danych, ale także unikatowym elementem kolekcjonerskim. Dzięki pojemności 64 GB pomieści wiele plików, a szybki interfejs USB 3.0 umożliwia szybki transfer danych. Niech Moc będzie z Tobą!',
      rate: 5,
      spec: {
        Pojemność: '64 GB',
        Interfejs: 'USB 3.0',
        Materiał: 'Plastik',
        Kompatybilność: 'Windows, macOS, Linux',
        Wymiary: '4 cm x 2 cm x 1.5 cm',
        Waga: '15 g',
        Kolor: 'Czarny',
      },
      images: {
        thumbnail: pendriveMain,
        gallery: pendrive,
      },
    },
    {
      id: '4',
      title: 'Moduł Bluetooth',
      price: 49,
      description:
        'Moduł Bluetooth Audio to przenośne urządzenie umożliwiające bezprzewodowe słuchanie muzyki oraz odbieranie połączeń z urządzeń wyposażonych w technologię Bluetooth. Dzięki wbudowanemu mikrofonowi i funkcjom sterowania, zapewnia wygodę użytkowania. Możesz podłączyć go do dowolnego urządzenia audio za pomocą standardowego gniazda Jack 3.5 mm. Świetnie sprawdzi się w podróży, w domu lub w samochodzie.',
      rate: 5,
      spec: {
        Typ: 'Moduł Bluetooth',
        'Wersja Bluetooth': '5.0',
        Zasięg: 'Do 10 metrów',
        Łączność: 'Bluetooth, Jack 3.5 mm',
        Bateria: 'Wbudowana, do 8 godzin pracy',
        Funkcje: 'Odbieranie połączeń, Sterowanie muzyką, Mikrofon',
        Kompatybilność: 'Smartfony, Tablety, Laptopy',
        Wymiary: '3 cm x 2 cm x 1 cm',
        Waga: '10 g',
      },
      images: {
        thumbnail: bt[0],
        gallery: bt,
      },
    },
  ],
  [Category.CAT2]: [
    {
      id: '21',
      title: 'Krem do golenia',
      price: 100,
      description: 'Opis',
      rate: 5,
      spec: {},
      images: {
        thumbnail: kremMain,
        gallery: krem,
      },
    },
    {
      id: '22',
      title: 'Pomatka ochronna',
      price: 5.99,
      description:
        'Pomadka ochronna do ust to niezbędny produkt w codziennej pielęgnacji ust, szczególnie w okresach zimowych lub podczas ekspozycji na słońce. Wykonana z naturalnych olejów roślinnych, wosków i witamin, zapewnia intensywne nawilżenie i ochronę przed wysuszeniem. Jej kremowa konsystencja sprawia, że łatwo się rozprowadza i szybko się wchłania, nie pozostawiając uczucia lepkości. Pomadka pozostawia usta miękkie, gładkie i zadbane. Dostępna w różnych zapachach i opakowaniach, aby dopasować się do indywidualnych preferencji i potrzeb pielęgnacyjnych.',
      rate: 5,
      spec: {
        Składniki: 'Naturalne oleje roślinne, Woski, Witaminy',
        Zastosowanie: 'Ochrona przed wysuszeniem, Nawilżanie ust',
        Efekty: 'Miękkie, Gładkie, Zadbane usta',
        Konsystencja: 'Kremowa, Nielepiąca',
        Zapach: 'Subtelny, Owocowy, Bez zapachu',
        Opakowanie: 'Szkło, Plastik',
        Pojemność: '5 ml',
      },
      images: {
        thumbnail: pomatkaMain,
        gallery: pomatka,
      },
    },
    {
      id: '23',
      title: 'Krople do oczu',
      price: 12.99,
      description:
        'Krople do oczu są przeznaczone do nawilżania, łagodzenia podrażnień i zapewnienia komfortu dla oczu. Ich skład oparty jest na roztworze soli fizjologicznej oraz hialuronianie sodu, co sprawia, że są bezpieczne i delikatne dla wrażliwych oczu. Krople można stosować kilka razy dziennie, w zależności od potrzeb. Dzięki dozownikowi butelki aplikacja jest łatwa i higieniczna. Zapewniają one natychmiastowe ulgę dla zmęczonych, suchych oczu, oraz są doskonałym rozwiązaniem dla osób pracujących przy komputerze, noszących soczewki kontaktowe, lub przebywających w klimatyzowanych pomieszczeniach.',
      rate: 5,
      spec: {
        Typ: 'Krople do oczu',
        Objętość: '10 ml',
        Skład: 'Roztwór soli fizjologicznej, Hialuronian sodu',
        Przeznaczenie:
          'Nawilżenie, Nawilżenie oka w wyniku suchości, Ochrona przed podrażnieniami',
        Stosowanie: '2-3 razy dziennie, w zależności od potrzeb',
        Opakowanie: 'Butelka z dozownikiem',
        Bezpieczeństwo: 'Bez konserwantów',
        Przechowywanie:
          'Przechowywać w temperaturze pokojowej, z dala od źródeł światła',
      },
      images: {
        thumbnail: swietlik[0],
        gallery: swietlik,
      },
    },
    {
      id: '24',
      title: 'Płyn na porost brody',
      price: 24.99,
      description:
        'Płyn na porost brody to produkt stworzony specjalnie dla mężczyzn pragnących zadbać o wygląd swojej brody. Bogata formuła wzbogacona witaminami, olejkami eterycznymi i ekstraktami roślinnymi stymuluje wzrost brody, jednocześnie ją zmiękczając i nawilżając. Płyn łatwo się aplikuje za pomocą dołączonego aplikatora, co zapewnia równomierne pokrycie skóry pod brodą. Codzienne stosowanie wieczorem pozwala na najlepsze efekty. Produkt jest hipoalergiczny i wolny od szkodliwych substancji, co sprawia, że jest bezpieczny dla skóry.',
      rate: 5,
      spec: {
        Typ: 'Płyn na porost brody',
        Objętość: '50 ml',
        Skład: 'Witaminy, Olejki eteryczne, Ekstrakty roślinne',
        Efekty: 'Stymulacja wzrostu, Zmiękczanie brody, Nawilżenie skóry',
        'Sposób stosowania': 'Nanoszenie na suchą, oczyszczoną skórę pod brodą',
        'Częstotliwość stosowania': 'Codziennie, wieczorem',
        Opakowanie: 'Butelka z aplikatorem',
        Bezpieczeństwo: 'Hipoalergiczny, Bez parabenów, Bez SLS',
      },
      images: {
        thumbnail: barber[0],
        gallery: barber,
      },
    },
  ],
  [Category.CAT3]: [
    {
      id: '31',
      title: 'Dogecoin',
      price: 24.99,
      rate: 3,
      spec: {
        Materiał: 'Stop metali szlachetnych',
        Średnica: '40 mm',
        Grubość: '3 mm',
        Waga: '30 g',
        Rodzaj: 'Złota moneta kolekcjonerska',
        Znak: 'Logo Dogecoin',
        Zabezpieczenia: 'Lakier ochronny',
        'Numer seryjny': 'Tak, indywidualny dla każdej monety',
      },
      images: {
        thumbnail: doge[1],
        gallery: doge,
      },
      description:
        'Fizyczna moneta Dogecoin to kolekcjonerska pamiątka dla miłośników kryptowaluty Dogecoin. Wykonana z wysokiej jakości stopy metali szlachetnych, o średnicy 40 mm i grubości 3 mm, posiada znak z logo Dogecoin. Moneta jest pokryta lakierem ochronnym, który zapewnia długotrwałą ochronę przed uszkodzeniami. Każda moneta posiada unikalny numer seryjny, co czyni ją wyjątkową. Doskonała jako prezent dla kolekcjonerów i entuzjastów kryptowalut.',
    },
    {
      id: '32',
      title: 'Ethereum',
      price: 100,
      rate: 5,
      spec: {
        Materiał: 'Stop metali szlachetnych',
        Średnica: '38 mm',
        Grubość: '2.5 mm',
        Waga: '25 g',
        Rodzaj: 'Srebrna moneta kolekcjonerska',
        Znak: 'Logo Ethereum',
        Zabezpieczenia: 'Lakier ochronny',
        'Numer seryjny': 'Tak, indywidualny dla każdej monety',
      },
      images: {
        thumbnail: eth[1],
        gallery: eth,
      },
      description:
        'Fizyczna moneta Ethereum to kolekcjonerska pamiątka dla miłośników kryptowaluty Ethereum. Wykonana z wysokiej jakości stopu metali szlachetnych, o średnicy 38 mm i grubości 2.5 mm, posiada znak z logo Ethereum. Moneta jest pokryta lakierem ochronnym, który zapewnia długotrwałą ochronę przed uszkodzeniami. Każda moneta posiada unikalny numer seryjny, co czyni ją wyjątkową. Doskonała jako prezent dla kolekcjonerów i entuzjastów kryptowalut.',
    },
    {
      id: '33',
      title: 'Ripple',
      price: 100,
      rate: 5,
      spec: {
        Materiał: 'Stop metali szlachetnych',
        Średnica: '40 mm',
        Grubość: '3 mm',
        Waga: '30 g',
        Rodzaj: 'Złota moneta kolekcjonerska',
        Znak: 'Logo Ripple',
        Zabezpieczenia: 'Lakier ochronny',
        'Numer seryjny': 'Tak, indywidualny dla każdej monety',
      },
      images: {
        thumbnail: xrp[1],
        gallery: xrp,
      },
      description:
        'Fizyczna moneta Ripple to kolekcjonerska pamiątka dla miłośników kryptowaluty Ripple. Wykonana z wysokiej jakości stopu metali szlachetnych, o średnicy 40 mm i grubości 3 mm, posiada znak z logo Ripple. Moneta jest pokryta lakierem ochronnym, który zapewnia długotrwałą ochronę przed uszkodzeniami. Każda moneta posiada unikalny numer seryjny, co czyni ją wyjątkową. Doskonała jako prezent dla kolekcjonerów i entuzjastów kryptowalut.',
    },
    {
      id: '34',
      title: 'Theter USD',
      price: 100,
      rate: 2,
      spec: {
        Materiał: 'Stop metali szlachetnych',
        Średnica: '35 mm',
        Grubość: '2 mm',
        Waga: '20 g',
        Rodzaj: 'Srebrna moneta kolekcjonerska',
        Znak: 'Logo USDT',
        Zabezpieczenia: 'Lakier ochronny',
        'Numer seryjny': 'Tak, indywidualny dla każdej monety',
      },
      images: {
        thumbnail: usdt[1],
        gallery: usdt,
      },
      description:
        'Fizyczna moneta USDT to kolekcjonerska pamiątka dla miłośników kryptowaluty Tether. Wykonana z wysokiej jakości stopu metali szlachetnych, o średnicy 35 mm i grubości 2 mm, posiada znak z logo USDT. Moneta jest pokryta lakierem ochronnym, który zapewnia długotrwałą ochronę przed uszkodzeniami. Każda moneta posiada unikalny numer seryjny, co czyni ją wyjątkową. Doskonała jako prezent dla kolekcjonerów i entuzjastów kryptowalut.',
    },
  ],
};
