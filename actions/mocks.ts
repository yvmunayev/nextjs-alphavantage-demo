import { NewsSentiment } from "@/types";


export const SYMBOL_SEARCH = {
    "bestMatches": [
        {
            "1. symbol": "TSCO.LON",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "GBX",
            "9. matchScore": "0.7273"
        },
        {
            "1. symbol": "TSCDF",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TSCDY",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TCO2.FRK",
            "2. name": "TESCO PLC ADR/1 LS-05",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        },
        {
            "1. symbol": "TCO0.FRK",
            "2. name": "TESCO PLC LS-0633333",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        }
    ]
}

export const MOCK_GLOBAL_QUOTE = {
    "Global Quote": {
        "01. symbol": "IBM",
        "02. open": "167.5000",
        "03. high": "167.5500",
        "04. low": "165.8800",
        "05. price": "166.2700",
        "06. volume": "4266616",
        "07. latest trading day": "2024-05-09",
        "08. previous close": "169.9000",
        "09. change": "-3.6300",
        "10. change percent": "-2.1366%"
    }
}


export const NOW = {
    "Meta Data": {
        "1. Information": "Intraday (5min) open, high, low, close prices and volume",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2024-05-09 19:55:00",
        "4. Interval": "5min",
        "5. Output Size": "Compact",
        "6. Time Zone": "US/Eastern"
    },
    "Time Series (5min)": {
        "2024-05-09 19:55:00": {
            "1. open": "166.5000",
            "2. high": "166.5000",
            "3. low": "166.4300",
            "4. close": "166.4300",
            "5. volume": "103"
        },
        "2024-05-09 19:40:00": {
            "1. open": "166.3500",
            "2. high": "166.3500",
            "3. low": "166.3500",
            "4. close": "166.3500",
            "5. volume": "10"
        },
        "2024-05-09 19:30:00": {
            "1. open": "166.4900",
            "2. high": "166.4900",
            "3. low": "166.4900",
            "4. close": "166.4900",
            "5. volume": "1"
        },
        "2024-05-09 19:25:00": {
            "1. open": "166.0400",
            "2. high": "166.5000",
            "3. low": "166.0400",
            "4. close": "166.5000",
            "5. volume": "13"
        },
        "2024-05-09 19:20:00": {
            "1. open": "166.4900",
            "2. high": "166.5000",
            "3. low": "166.1600",
            "4. close": "166.5000",
            "5. volume": "151"
        },
        "2024-05-09 19:15:00": {
            "1. open": "166.5000",
            "2. high": "166.5000",
            "3. low": "166.5000",
            "4. close": "166.5000",
            "5. volume": "12"
        },
        "2024-05-09 19:00:00": {
            "1. open": "166.2700",
            "2. high": "166.4900",
            "3. low": "166.2700",
            "4. close": "166.4900",
            "5. volume": "730123"
        },
        "2024-05-09 18:55:00": {
            "1. open": "166.4900",
            "2. high": "166.4900",
            "3. low": "166.4900",
            "4. close": "166.4900",
            "5. volume": "10"
        },
        "2024-05-09 18:50:00": {
            "1. open": "166.4900",
            "2. high": "166.4900",
            "3. low": "166.3200",
            "4. close": "166.3500",
            "5. volume": "111"
        },
        "2024-05-09 18:40:00": {
            "1. open": "166.4900",
            "2. high": "166.4900",
            "3. low": "166.1000",
            "4. close": "166.4900",
            "5. volume": "16"
        },
        "2024-05-09 18:30:00": {
            "1. open": "166.2700",
            "2. high": "166.3500",
            "3. low": "166.2500",
            "4. close": "166.2500",
            "5. volume": "730207"
        },
        "2024-05-09 18:25:00": {
            "1. open": "166.3400",
            "2. high": "166.3500",
            "3. low": "166.3000",
            "4. close": "166.3000",
            "5. volume": "60"
        },
        "2024-05-09 18:20:00": {
            "1. open": "166.3500",
            "2. high": "166.3500",
            "3. low": "166.3500",
            "4. close": "166.3500",
            "5. volume": "6"
        },
        "2024-05-09 18:15:00": {
            "1. open": "166.3500",
            "2. high": "166.3500",
            "3. low": "166.3500",
            "4. close": "166.3500",
            "5. volume": "30"
        },
        "2024-05-09 18:10:00": {
            "1. open": "166.1700",
            "2. high": "166.3500",
            "3. low": "166.1700",
            "4. close": "166.1700",
            "5. volume": "159"
        },
        "2024-05-09 18:05:00": {
            "1. open": "166.1200",
            "2. high": "166.1600",
            "3. low": "166.1200",
            "4. close": "166.1600",
            "5. volume": "5"
        },
        "2024-05-09 18:00:00": {
            "1. open": "166.2000",
            "2. high": "166.3500",
            "3. low": "166.1700",
            "4. close": "166.2200",
            "5. volume": "57"
        },
        "2024-05-09 17:55:00": {
            "1. open": "166.1370",
            "2. high": "166.1370",
            "3. low": "166.1370",
            "4. close": "166.1370",
            "5. volume": "80"
        },
        "2024-05-09 17:50:00": {
            "1. open": "166.4700",
            "2. high": "166.4700",
            "3. low": "166.4500",
            "4. close": "166.4500",
            "5. volume": "42"
        },
        "2024-05-09 17:45:00": {
            "1. open": "166.4900",
            "2. high": "166.4900",
            "3. low": "166.4900",
            "4. close": "166.4900",
            "5. volume": "1"
        },
        "2024-05-09 17:40:00": {
            "1. open": "166.4800",
            "2. high": "166.4900",
            "3. low": "166.3500",
            "4. close": "166.4900",
            "5. volume": "616"
        },
        "2024-05-09 17:35:00": {
            "1. open": "166.4800",
            "2. high": "166.4900",
            "3. low": "166.4800",
            "4. close": "166.4900",
            "5. volume": "1011"
        },
        "2024-05-09 17:30:00": {
            "1. open": "166.2800",
            "2. high": "166.4900",
            "3. low": "166.2800",
            "4. close": "166.4900",
            "5. volume": "58"
        },
        "2024-05-09 17:20:00": {
            "1. open": "166.5000",
            "2. high": "166.5000",
            "3. low": "166.4500",
            "4. close": "166.4500",
            "5. volume": "470"
        },
        "2024-05-09 17:15:00": {
            "1. open": "166.5000",
            "2. high": "166.5000",
            "3. low": "166.5000",
            "4. close": "166.5000",
            "5. volume": "15"
        },
        "2024-05-09 17:05:00": {
            "1. open": "166.2100",
            "2. high": "166.4400",
            "3. low": "166.1000",
            "4. close": "166.3800",
            "5. volume": "1569"
        },
        "2024-05-09 17:00:00": {
            "1. open": "166.2800",
            "2. high": "166.2800",
            "3. low": "166.2800",
            "4. close": "166.2800",
            "5. volume": "77"
        },
        "2024-05-09 16:55:00": {
            "1. open": "166.2800",
            "2. high": "166.2900",
            "3. low": "166.2200",
            "4. close": "166.2200",
            "5. volume": "942"
        },
        "2024-05-09 16:50:00": {
            "1. open": "166.2800",
            "2. high": "166.5000",
            "3. low": "166.2800",
            "4. close": "166.5000",
            "5. volume": "6"
        },
        "2024-05-09 16:45:00": {
            "1. open": "166.5000",
            "2. high": "166.5000",
            "3. low": "166.2900",
            "4. close": "166.2900",
            "5. volume": "190"
        },
        "2024-05-09 16:40:00": {
            "1. open": "166.2700",
            "2. high": "166.5250",
            "3. low": "166.2700",
            "4. close": "166.5250",
            "5. volume": "154"
        },
        "2024-05-09 16:35:00": {
            "1. open": "166.2000",
            "2. high": "166.5300",
            "3. low": "166.2000",
            "4. close": "166.5300",
            "5. volume": "247"
        },
        "2024-05-09 16:30:00": {
            "1. open": "166.1000",
            "2. high": "166.5300",
            "3. low": "166.1000",
            "4. close": "166.5300",
            "5. volume": "38"
        },
        "2024-05-09 16:25:00": {
            "1. open": "166.2600",
            "2. high": "166.5300",
            "3. low": "166.1000",
            "4. close": "166.5300",
            "5. volume": "364"
        },
        "2024-05-09 16:20:00": {
            "1. open": "166.2600",
            "2. high": "166.5300",
            "3. low": "166.2600",
            "4. close": "166.2700",
            "5. volume": "81"
        },
        "2024-05-09 16:15:00": {
            "1. open": "166.2700",
            "2. high": "166.5300",
            "3. low": "166.2600",
            "4. close": "166.2600",
            "5. volume": "163"
        },
        "2024-05-09 16:10:00": {
            "1. open": "166.2700",
            "2. high": "166.5000",
            "3. low": "166.1600",
            "4. close": "166.5000",
            "5. volume": "730273"
        },
        "2024-05-09 16:05:00": {
            "1. open": "166.2700",
            "2. high": "166.3000",
            "3. low": "166.2500",
            "4. close": "166.2500",
            "5. volume": "2853"
        },
        "2024-05-09 16:00:00": {
            "1. open": "166.3200",
            "2. high": "166.5300",
            "3. low": "165.9100",
            "4. close": "166.2700",
            "5. volume": "1791771"
        },
        "2024-05-09 15:55:00": {
            "1. open": "166.2100",
            "2. high": "166.4000",
            "3. low": "166.0100",
            "4. close": "166.3200",
            "5. volume": "382287"
        },
        "2024-05-09 15:50:00": {
            "1. open": "166.2100",
            "2. high": "166.4750",
            "3. low": "166.1050",
            "4. close": "166.2000",
            "5. volume": "146888"
        },
        "2024-05-09 15:45:00": {
            "1. open": "166.2250",
            "2. high": "166.3200",
            "3. low": "166.1500",
            "4. close": "166.2200",
            "5. volume": "93394"
        },
        "2024-05-09 15:40:00": {
            "1. open": "166.3000",
            "2. high": "166.3400",
            "3. low": "166.1600",
            "4. close": "166.2300",
            "5. volume": "63472"
        },
        "2024-05-09 15:35:00": {
            "1. open": "166.2900",
            "2. high": "166.3700",
            "3. low": "166.2500",
            "4. close": "166.2810",
            "5. volume": "49188"
        },
        "2024-05-09 15:30:00": {
            "1. open": "166.4100",
            "2. high": "166.4600",
            "3. low": "166.2300",
            "4. close": "166.2700",
            "5. volume": "46723"
        },
        "2024-05-09 15:25:00": {
            "1. open": "166.6350",
            "2. high": "166.6400",
            "3. low": "166.4200",
            "4. close": "166.4300",
            "5. volume": "34328"
        },
        "2024-05-09 15:20:00": {
            "1. open": "166.5510",
            "2. high": "166.6500",
            "3. low": "166.5330",
            "4. close": "166.6350",
            "5. volume": "29549"
        },
        "2024-05-09 15:15:00": {
            "1. open": "166.7000",
            "2. high": "166.7000",
            "3. low": "166.5400",
            "4. close": "166.5600",
            "5. volume": "28641"
        },
        "2024-05-09 15:10:00": {
            "1. open": "166.6100",
            "2. high": "166.7200",
            "3. low": "166.5000",
            "4. close": "166.7200",
            "5. volume": "31341"
        },
        "2024-05-09 15:05:00": {
            "1. open": "166.5700",
            "2. high": "166.7270",
            "3. low": "166.5400",
            "4. close": "166.6000",
            "5. volume": "40765"
        },
        "2024-05-09 15:00:00": {
            "1. open": "166.4400",
            "2. high": "166.5650",
            "3. low": "166.3500",
            "4. close": "166.5650",
            "5. volume": "27443"
        },
        "2024-05-09 14:55:00": {
            "1. open": "166.3900",
            "2. high": "166.4900",
            "3. low": "166.3600",
            "4. close": "166.4300",
            "5. volume": "27672"
        },
        "2024-05-09 14:50:00": {
            "1. open": "166.3600",
            "2. high": "166.4680",
            "3. low": "166.3500",
            "4. close": "166.3800",
            "5. volume": "24796"
        },
        "2024-05-09 14:45:00": {
            "1. open": "166.2500",
            "2. high": "166.3500",
            "3. low": "166.1610",
            "4. close": "166.3400",
            "5. volume": "36548"
        },
        "2024-05-09 14:40:00": {
            "1. open": "166.3400",
            "2. high": "166.3400",
            "3. low": "166.1970",
            "4. close": "166.2330",
            "5. volume": "38616"
        },
        "2024-05-09 14:35:00": {
            "1. open": "166.1400",
            "2. high": "166.4000",
            "3. low": "166.1200",
            "4. close": "166.3400",
            "5. volume": "25906"
        },
        "2024-05-09 14:30:00": {
            "1. open": "166.2200",
            "2. high": "166.2400",
            "3. low": "166.1500",
            "4. close": "166.1670",
            "5. volume": "16194"
        },
        "2024-05-09 14:25:00": {
            "1. open": "166.0000",
            "2. high": "166.2250",
            "3. low": "165.9990",
            "4. close": "166.2250",
            "5. volume": "22735"
        },
        "2024-05-09 14:20:00": {
            "1. open": "166.1700",
            "2. high": "166.1700",
            "3. low": "165.9300",
            "4. close": "165.9850",
            "5. volume": "26484"
        },
        "2024-05-09 14:15:00": {
            "1. open": "165.9800",
            "2. high": "166.2000",
            "3. low": "165.9300",
            "4. close": "166.1800",
            "5. volume": "33571"
        },
        "2024-05-09 14:10:00": {
            "1. open": "165.9980",
            "2. high": "166.0300",
            "3. low": "165.9600",
            "4. close": "166.0000",
            "5. volume": "18460"
        },
        "2024-05-09 14:05:00": {
            "1. open": "165.9800",
            "2. high": "166.0900",
            "3. low": "165.9500",
            "4. close": "165.9600",
            "5. volume": "39636"
        },
        "2024-05-09 14:00:00": {
            "1. open": "165.9950",
            "2. high": "166.0300",
            "3. low": "165.9300",
            "4. close": "165.9700",
            "5. volume": "28711"
        },
        "2024-05-09 13:55:00": {
            "1. open": "165.9150",
            "2. high": "166.0500",
            "3. low": "165.9100",
            "4. close": "166.0020",
            "5. volume": "47093"
        },
        "2024-05-09 13:50:00": {
            "1. open": "166.1100",
            "2. high": "166.1200",
            "3. low": "165.8800",
            "4. close": "165.9120",
            "5. volume": "119864"
        },
        "2024-05-09 13:45:00": {
            "1. open": "166.2200",
            "2. high": "166.2700",
            "3. low": "166.0900",
            "4. close": "166.0900",
            "5. volume": "30776"
        },
        "2024-05-09 13:40:00": {
            "1. open": "166.2660",
            "2. high": "166.2700",
            "3. low": "166.1700",
            "4. close": "166.2200",
            "5. volume": "37397"
        },
        "2024-05-09 13:35:00": {
            "1. open": "166.3180",
            "2. high": "166.3570",
            "3. low": "166.1900",
            "4. close": "166.2700",
            "5. volume": "31567"
        },
        "2024-05-09 13:30:00": {
            "1. open": "166.3700",
            "2. high": "166.4500",
            "3. low": "166.2600",
            "4. close": "166.3150",
            "5. volume": "50027"
        },
        "2024-05-09 13:25:00": {
            "1. open": "166.2800",
            "2. high": "166.4100",
            "3. low": "166.2400",
            "4. close": "166.3600",
            "5. volume": "38694"
        },
        "2024-05-09 13:20:00": {
            "1. open": "166.3500",
            "2. high": "166.4100",
            "3. low": "166.2700",
            "4. close": "166.2990",
            "5. volume": "45394"
        },
        "2024-05-09 13:15:00": {
            "1. open": "166.4200",
            "2. high": "166.5100",
            "3. low": "166.3400",
            "4. close": "166.3400",
            "5. volume": "19451"
        },
        "2024-05-09 13:10:00": {
            "1. open": "166.3200",
            "2. high": "166.4500",
            "3. low": "166.3200",
            "4. close": "166.4300",
            "5. volume": "18479"
        },
        "2024-05-09 13:05:00": {
            "1. open": "166.2100",
            "2. high": "166.4400",
            "3. low": "166.1400",
            "4. close": "166.3450",
            "5. volume": "32890"
        },
        "2024-05-09 13:00:00": {
            "1. open": "166.2700",
            "2. high": "166.3700",
            "3. low": "166.2100",
            "4. close": "166.3000",
            "5. volume": "28345"
        },
        "2024-05-09 12:55:00": {
            "1. open": "166.3300",
            "2. high": "166.3900",
            "3. low": "166.2200",
            "4. close": "166.2800",
            "5. volume": "25042"
        },
        "2024-05-09 12:50:00": {
            "1. open": "166.3800",
            "2. high": "166.4000",
            "3. low": "166.3200",
            "4. close": "166.3400",
            "5. volume": "23625"
        },
        "2024-05-09 12:45:00": {
            "1. open": "166.4350",
            "2. high": "166.4800",
            "3. low": "166.3400",
            "4. close": "166.3600",
            "5. volume": "32538"
        },
        "2024-05-09 12:40:00": {
            "1. open": "166.3800",
            "2. high": "166.4700",
            "3. low": "166.3600",
            "4. close": "166.4200",
            "5. volume": "27396"
        },
        "2024-05-09 12:35:00": {
            "1. open": "166.2600",
            "2. high": "166.4500",
            "3. low": "166.2600",
            "4. close": "166.3600",
            "5. volume": "20552"
        },
        "2024-05-09 12:30:00": {
            "1. open": "166.2700",
            "2. high": "166.3000",
            "3. low": "166.1800",
            "4. close": "166.2300",
            "5. volume": "22574"
        },
        "2024-05-09 12:25:00": {
            "1. open": "166.2700",
            "2. high": "166.4000",
            "3. low": "166.2100",
            "4. close": "166.2600",
            "5. volume": "19463"
        },
        "2024-05-09 12:20:00": {
            "1. open": "166.2300",
            "2. high": "166.2900",
            "3. low": "166.1650",
            "4. close": "166.2800",
            "5. volume": "30099"
        },
        "2024-05-09 12:15:00": {
            "1. open": "166.3600",
            "2. high": "166.4200",
            "3. low": "166.2000",
            "4. close": "166.2400",
            "5. volume": "44667"
        },
        "2024-05-09 12:10:00": {
            "1. open": "166.3900",
            "2. high": "166.4100",
            "3. low": "166.3100",
            "4. close": "166.3500",
            "5. volume": "24853"
        },
        "2024-05-09 12:05:00": {
            "1. open": "166.5600",
            "2. high": "166.5600",
            "3. low": "166.3700",
            "4. close": "166.3800",
            "5. volume": "20918"
        },
        "2024-05-09 12:00:00": {
            "1. open": "166.5500",
            "2. high": "166.6800",
            "3. low": "166.5200",
            "4. close": "166.5900",
            "5. volume": "21372"
        },
        "2024-05-09 11:55:00": {
            "1. open": "166.4500",
            "2. high": "166.5300",
            "3. low": "166.3700",
            "4. close": "166.5300",
            "5. volume": "22250"
        },
        "2024-05-09 11:50:00": {
            "1. open": "166.6300",
            "2. high": "166.6300",
            "3. low": "166.4600",
            "4. close": "166.4600",
            "5. volume": "20251"
        },
        "2024-05-09 11:45:00": {
            "1. open": "166.3700",
            "2. high": "166.6100",
            "3. low": "166.3200",
            "4. close": "166.6100",
            "5. volume": "21287"
        },
        "2024-05-09 11:40:00": {
            "1. open": "166.4900",
            "2. high": "166.5000",
            "3. low": "166.3280",
            "4. close": "166.3900",
            "5. volume": "26308"
        },
        "2024-05-09 11:35:00": {
            "1. open": "166.5500",
            "2. high": "166.6530",
            "3. low": "166.4900",
            "4. close": "166.5050",
            "5. volume": "27380"
        },
        "2024-05-09 11:30:00": {
            "1. open": "166.7050",
            "2. high": "166.7800",
            "3. low": "166.5700",
            "4. close": "166.5700",
            "5. volume": "28571"
        },
        "2024-05-09 11:25:00": {
            "1. open": "166.6300",
            "2. high": "166.7100",
            "3. low": "166.5400",
            "4. close": "166.6800",
            "5. volume": "27212"
        },
        "2024-05-09 11:20:00": {
            "1. open": "166.7000",
            "2. high": "166.7550",
            "3. low": "166.6600",
            "4. close": "166.6700",
            "5. volume": "14852"
        },
        "2024-05-09 11:15:00": {
            "1. open": "166.8400",
            "2. high": "166.8500",
            "3. low": "166.6600",
            "4. close": "166.6900",
            "5. volume": "24388"
        },
        "2024-05-09 11:10:00": {
            "1. open": "167.0300",
            "2. high": "167.0400",
            "3. low": "166.8000",
            "4. close": "166.8300",
            "5. volume": "13718"
        },
        "2024-05-09 11:05:00": {
            "1. open": "166.7100",
            "2. high": "167.1090",
            "3. low": "166.6900",
            "4. close": "167.0380",
            "5. volume": "22905"
        },
        "2024-05-09 11:00:00": {
            "1. open": "166.6800",
            "2. high": "166.8100",
            "3. low": "166.6300",
            "4. close": "166.7000",
            "5. volume": "19604"
        },
        "2024-05-09 10:55:00": {
            "1. open": "166.6700",
            "2. high": "166.7000",
            "3. low": "166.5300",
            "4. close": "166.6990",
            "5. volume": "27850"
        }
    }
}



export const NEWS_SENTIMENT: NewsSentiment = {
    "items": "21",
    "sentiment_score_definition": "x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15: Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish",
    "relevance_score_definition": "0 < x <= 1, with a higher score indicating higher relevance.",
    "feed": [
        {
            "title": "Bitcoin, Ethereum, Dogecoin Lose Ground, Cannot Back Up Friday's ETF Flows Inflows: 'Bitcoin Is The Escape Hatch'",
            "url": "https://www.benzinga.com/markets/cryptocurrency/24/05/38654240/bitcoin-ethereum-dogecoin-lose-ground-cannot-back-up-fridays-etf-flows-inflows-bitcoin-is-",
            "time_published": "20240506T203214",
            "authors": [
                "Khyathi Dalal"
            ],
            "summary": "Cryptocurrency markets could not continue their uptrend initiated by surprisingly strong ETF data on Friday. What Happened: Major cryptocurrencies are trading lower at the time of writing: In the past 24 hours, 66,592 traders were liquidated.",
            "banner_image": "https://cdn.benzinga.com/files/images/story/2024/05/06/bitcoin-ai23.png?width=1200&height=800&fit=crop",
            "source": "Benzinga",
            "category_within_source": "Markets",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.650727"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.310843"
                }
            ],
            "overall_sentiment_score": 0.153173,
            "overall_sentiment_label": "Somewhat-Bullish",
            "ticker_sentiment": [
                {
                    "ticker": "MSTR",
                    "relevance_score": "0.133841",
                    "ticker_sentiment_score": "0.141935",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.133841",
                    "ticker_sentiment_score": "0.0",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.133841",
                    "ticker_sentiment_score": "-0.208695",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.688096",
                    "ticker_sentiment_score": "0.080537",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.133841",
                    "ticker_sentiment_score": "0.258325",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "U.S. Stablecoin Bill Would Rein In Tether, Boost Coinbase And Circle, Outlaw Algorithmics",
            "url": "https://www.forbes.com/sites/digital-assets/2024/04/26/us-stablecoin-bill-would-rein-in-tether-boost-coinbase-and-circle-outlaw-algorithmics/",
            "time_published": "20240426T192107",
            "authors": [
                "Jason Brett"
            ],
            "summary": "Senators Cynthia Lummis ( R-Wyo. ) and Kirsten Gillibrand ( D-N.Y. ) introduced the Payment Stablecoin Act of 2024 on April 17.",
            "banner_image": "https://imageio.forbes.com/specials-images/imageserve/662bfe2c8fe3fd62aa5e4fee/0x0.jpg?format=jpg&crop=2356,1326,x0,y121,safe&height=900&width=1600&fit=bounds",
            "source": "Forbes",
            "category_within_source": "n/a",
            "source_domain": "www.forbes.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.451494"
                },
                {
                    "topic": "IPO",
                    "relevance_score": "0.310843"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.967645"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.999999"
                }
            ],
            "overall_sentiment_score": 0.132822,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "GS",
                    "relevance_score": "0.031696",
                    "ticker_sentiment_score": "0.182314",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.094887",
                    "ticker_sentiment_score": "0.101469",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "STT",
                    "relevance_score": "0.031696",
                    "ticker_sentiment_score": "0.182314",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.094887",
                    "ticker_sentiment_score": "0.074619",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.063341",
                    "ticker_sentiment_score": "0.165403",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "CRYPTO:AAVE",
                    "relevance_score": "0.063341",
                    "ticker_sentiment_score": "0.081128",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:UST",
                    "relevance_score": "0.063341",
                    "ticker_sentiment_score": "0.01208",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Coinbase dunks on traditional payment methods in $15M NBA ad spend",
            "url": "https://www.foxbusiness.com/money/coinbase-dunks-traditional-payment-methods-15m-nba-ad-spend",
            "time_published": "20240424T035300",
            "authors": [
                "Eleanor Terrett"
            ],
            "summary": "Coinbase is launching a $15 million TV ad campaign that aims to tout the merits of cryptocurrency and exhibit the pitfalls of traditional payment rails in a language that sports fans understand: Pizza.",
            "banner_image": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/06/931/523/Coinbase-cryptocurrency.jpg?ve=1&tl=1",
            "source": "Fox Business News",
            "category_within_source": "n/a",
            "source_domain": "www.foxbusiness.com",
            "topics": [
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.838487"
                }
            ],
            "overall_sentiment_score": 0.035734,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.186259",
                    "ticker_sentiment_score": "0.065876",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.062597",
                    "ticker_sentiment_score": "0.0",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.124809",
                    "ticker_sentiment_score": "0.041286",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "History of Crypto: Crippling inflation, rising debt, and the evolving crypto landscape",
            "url": "https://cointelegraph.com/news/crypto-history-inflation-debt-evolution",
            "time_published": "20240416T140500",
            "authors": [
                "Brayden Lindrea"
            ],
            "summary": "The 2022-2023 period saw several bad actors wiped from the cryptocurrency industry, none bigger than FTX's Sam Bankman-Fried.",
            "banner_image": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-04/9cd7026d-d0a8-4c0e-83e3-5809d7673067.jpg",
            "source": "Cointelegraph",
            "category_within_source": "n/a",
            "source_domain": "cointelegraph.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.999326"
                },
                {
                    "topic": "Economy - Fiscal",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.538269"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.890401"
                }
            ],
            "overall_sentiment_score": -0.264414,
            "overall_sentiment_label": "Somewhat-Bearish",
            "ticker_sentiment": [
                {
                    "ticker": "SBNY",
                    "relevance_score": "0.043264",
                    "ticker_sentiment_score": "-0.199947",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.0864",
                    "ticker_sentiment_score": "-0.02909",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.043264",
                    "ticker_sentiment_score": "-0.006997",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.295867",
                    "ticker_sentiment_score": "-0.024202",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.0864",
                    "ticker_sentiment_score": "0.134463",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "90% of Bitcoin ETF inflows are still retail - VanEck CEO",
            "url": "https://cointelegraph.com/news/retail-investors-bitcoin-etf-vaneck",
            "time_published": "20240411T082812",
            "authors": [
                "Gareth Jenkinson"
            ],
            "summary": "The CEO of investment management firm VanEck says spot Bitcoin ETFs have mainly attracted inflows of capital from retail investors four months since their launch.",
            "banner_image": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-04/ef3134dc-5463-4767-a387-71acc75d5808.jpg",
            "source": "Cointelegraph",
            "category_within_source": "n/a",
            "source_domain": "cointelegraph.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Economy - Fiscal",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.990893"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.310843"
                }
            ],
            "overall_sentiment_score": 0.24517,
            "overall_sentiment_label": "Somewhat-Bullish",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.070105",
                    "ticker_sentiment_score": "0.150878",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.070105",
                    "ticker_sentiment_score": "0.11151",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.74725",
                    "ticker_sentiment_score": "0.349718",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "As Bitcoin Surges, Nigerians Are Facing Harsh FX-Related Interventions",
            "url": "https://www.forbes.com/sites/digital-assets/2024/04/08/as-bitcoin-surges-nigerians-are-facing-harsh-fx-related-interventions/",
            "time_published": "20240409T011002",
            "authors": [
                "Abubakar Nur Khalil"
            ],
            "summary": "As the first quarter of 2024 began, Nigerians were cautiously optimistic about the outlook for the year following the reversal of the Bitcoin ban in December 2023 and the changing stance of regulators towards Bitcoin and other digital assets.",
            "banner_image": "https://imageio.forbes.com/specials-images/imageserve/66148eb85dd32164d1103cdb/0x0.jpg?format=jpg&crop=742,418,x0,y25,safe&height=900&width=1600&fit=bounds",
            "source": "Forbes",
            "category_within_source": "n/a",
            "source_domain": "www.forbes.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.989041"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.769861"
                }
            ],
            "overall_sentiment_score": -0.071466,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.045396",
                    "ticker_sentiment_score": "0.018708",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:NGN",
                    "relevance_score": "0.391583",
                    "ticker_sentiment_score": "-0.053048",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.045396",
                    "ticker_sentiment_score": "-0.010881",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.505464",
                    "ticker_sentiment_score": "-0.07061",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Why Bitcoin, Ethereum, and Dogecoin Slumped Today",
            "url": "https://www.fool.com/investing/2024/04/02/why-bitcoin-ethereum-and-dogecoin-are-slumping-tod/",
            "time_published": "20240402T195551",
            "authors": [
                "Chris MacDonald"
            ],
            "summary": "These three megacap tokens are losing serious ground today on macro and token-specific news.",
            "banner_image": "https://g.foolcdn.com/editorial/images/771587/market-crash2.jpg",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.576289"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.310843"
                }
            ],
            "overall_sentiment_score": 0.063146,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.066598",
                    "ticker_sentiment_score": "0.010072",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.197951",
                    "ticker_sentiment_score": "0.184803",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.441424",
                    "ticker_sentiment_score": "0.122251",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.323927",
                    "ticker_sentiment_score": "0.098147",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:DOGE",
                    "relevance_score": "0.197951",
                    "ticker_sentiment_score": "0.078289",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Bitcoin tumbles $5,000 in 24 hours as interest rates jump",
            "url": "https://www.cnbc.com/2024/04/02/crypto-market-today.html",
            "time_published": "20240402T135723",
            "authors": [
                "Tanaya Macheel"
            ],
            "summary": "Bitcoin fell to start the new month and quarter, amid rising Treasury yields and strength in the U.S. dollar.",
            "banner_image": "https://image.cnbcfm.com/api/v1/image/107005776-1643087617730-gettyimages-1237955656-20090101220124-99-833573.jpeg?v=1712058077&w=1920&h=1080",
            "source": "CNBC",
            "category_within_source": "Top News",
            "source_domain": "www.cnbc.com",
            "topics": [
                {
                    "topic": "Life Sciences",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.25"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.310843"
                },
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.214378"
                },
                {
                    "topic": "Real Estate & Construction",
                    "relevance_score": "0.25"
                }
            ],
            "overall_sentiment_score": -0.053078,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MARA",
                    "relevance_score": "0.102013",
                    "ticker_sentiment_score": "-0.056403",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "MSTR",
                    "relevance_score": "0.102013",
                    "ticker_sentiment_score": "-0.056403",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "RIOT",
                    "relevance_score": "0.102013",
                    "ticker_sentiment_score": "-0.056403",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CLSK",
                    "relevance_score": "0.102013",
                    "ticker_sentiment_score": "-0.056403",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.102013",
                    "ticker_sentiment_score": "-0.056403",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.299478",
                    "ticker_sentiment_score": "0.004537",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.876064",
                    "ticker_sentiment_score": "-0.071352",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.102013",
                    "ticker_sentiment_score": "-0.221281",
                    "ticker_sentiment_label": "Somewhat-Bearish"
                }
            ]
        },
        {
            "title": "Our Pick Of The Best Cryptocurrencies Of April 2024",
            "url": "https://www.forbes.com/uk/advisor/investing/cryptocurrency/top-10-cryptocurrencies-april-2024/",
            "time_published": "20240402T114443",
            "authors": [
                "Mark Hooson"
            ],
            "summary": "Top 10 Cryptocurrencies In April 2024 - Forbes Advisor UK Forbes ...",
            "banner_image": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2022/12/andre-francois-mckenzie-iGYiBhdNTpE-unsplash-scaled-e1670321045384.jpg",
            "source": "Forbes",
            "category_within_source": "n/a",
            "source_domain": "www.forbes.com",
            "topics": [
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.999982"
                }
            ],
            "overall_sentiment_score": 0.118752,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.030524",
                    "ticker_sentiment_score": "0.025873",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AWON",
                    "relevance_score": "0.030524",
                    "ticker_sentiment_score": "0.0",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "LDNXF",
                    "relevance_score": "0.030524",
                    "ticker_sentiment_score": "0.025873",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:EUR",
                    "relevance_score": "0.030524",
                    "ticker_sentiment_score": "0.063106",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.091393",
                    "ticker_sentiment_score": "0.0",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.211191",
                    "ticker_sentiment_score": "0.144673",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.15173",
                    "ticker_sentiment_score": "0.054704",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:DOGE",
                    "relevance_score": "0.061003",
                    "ticker_sentiment_score": "0.200657",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "CRYPTO:ADA",
                    "relevance_score": "0.15173",
                    "ticker_sentiment_score": "0.105983",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BNB",
                    "relevance_score": "0.030524",
                    "ticker_sentiment_score": "0.061223",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "The Richest Crypto And Bitcoin Billionaires In The World 2024",
            "url": "https://www.forbes.com/sites/johnhyatt/2024/04/02/the-richest-crypto-and-bitcoin-billionaires-in-the-world-2024/",
            "time_published": "20240402T100000",
            "authors": [
                "John Hyatt"
            ],
            "summary": "Meet the 17 investors and entrepreneurs who made ten-digit fortunes on the blockchain. he crypto winter is over. Bitcoin has more than doubled over the past 12 months, hitting an all-time high of $73,000 in March after the U.S. legalized bitcoin-pegged exchange-traded funds.",
            "banner_image": "https://imageio.forbes.com/specials-images/imageserve/660b0af9f353936322abad16/0x0.jpg?format=jpg&crop=1920,1079,x0,y0,safe&height=900&width=1600&fit=bounds",
            "source": "Forbes",
            "category_within_source": "n/a",
            "source_domain": "www.forbes.com",
            "topics": [
                {
                    "topic": "Financial Markets",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.744043"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.999855"
                }
            ],
            "overall_sentiment_score": 0.101698,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "MSTR",
                    "relevance_score": "0.087663",
                    "ticker_sentiment_score": "0.046299",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "META",
                    "relevance_score": "0.021957",
                    "ticker_sentiment_score": "0.03203",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "TSLA",
                    "relevance_score": "0.021957",
                    "ticker_sentiment_score": "0.030551",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "GS",
                    "relevance_score": "0.021957",
                    "ticker_sentiment_score": "0.087312",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "BRPHF",
                    "relevance_score": "0.021957",
                    "ticker_sentiment_score": "0.087312",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.174272",
                    "ticker_sentiment_score": "0.041428",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.021957",
                    "ticker_sentiment_score": "0.103049",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.043898",
                    "ticker_sentiment_score": "0.109943",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.043898",
                    "ticker_sentiment_score": "0.010913",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:FIL",
                    "relevance_score": "0.021957",
                    "ticker_sentiment_score": "-0.011041",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Bitcoin Price Plunges Below $67,000, Crypto Market Sees $426 Million in Liquidations",
            "url": "https://decrypt.co/224396/bitcoin-price-plunges-below-67000-crypto-market-sees-426-million-in-liquidations",
            "time_published": "20240402T092030",
            "authors": [
                "Stephen Graves"
            ],
            "summary": "The wider crypto market fell in lockstep with Bitcoin, with all of the top 30 coins barring stablecoins posting losses.",
            "banner_image": "https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2024/04/btc-liquidations.jpg@webp",
            "source": "Decrypt.co",
            "category_within_source": "n/a",
            "source_domain": "decrypt.co",
            "topics": [
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.682689"
                },
                {
                    "topic": "Economy - Macro",
                    "relevance_score": "0.158519"
                }
            ],
            "overall_sentiment_score": 0.08168,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.192106",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "FOREX:CHF",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.140659",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:JPY",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.140659",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:EUR",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.140659",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:GBP",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.140659",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:CAD",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.140659",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.140659",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:SEK",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.140659",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.767792",
                    "ticker_sentiment_score": "0.056091",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.079823",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BCH",
                    "relevance_score": "0.105604",
                    "ticker_sentiment_score": "0.079823",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "3 Reasons Why The U.S. Needs To Embrace Bitcoin  ( And Other Crypto ) ",
            "url": "https://www.forbes.com/sites/digital-assets/2024/03/31/3-reasons-why-the-us-needs-to-embrace-bitcoin-and-other-crypto/",
            "time_published": "20240331T182714",
            "authors": [
                "Sean Stein Smith"
            ],
            "summary": "It is no secret that the topic of bitcoin and the broader cryptoasset space has continuously been a topic of controversy and debate in the United States.",
            "banner_image": "https://imageio.forbes.com/specials-images/imageserve/61b75aacdf113084810d569a/0x0.jpg?format=jpg&crop=2463,1155,x0,y241,safe&height=900&width=1600&fit=bounds",
            "source": "Forbes",
            "category_within_source": "n/a",
            "source_domain": "www.forbes.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.451494"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.769861"
                }
            ],
            "overall_sentiment_score": 0.095623,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "BLK",
                    "relevance_score": "0.051003",
                    "ticker_sentiment_score": "0.097956",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "PYPL",
                    "relevance_score": "0.051003",
                    "ticker_sentiment_score": "0.042063",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.051003",
                    "ticker_sentiment_score": "-0.076814",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.250902",
                    "ticker_sentiment_score": "0.038585",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.345674",
                    "ticker_sentiment_score": "0.025006",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.051003",
                    "ticker_sentiment_score": "-0.076814",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Are Spot Bitcoin ETFs Just the Beginning for Wall Street?",
            "url": "https://www.fool.com/investing/2024/03/30/are-spot-bitcoin-etfs-just-the-beginning-for-wall/",
            "time_published": "20240330T093100",
            "authors": [
                "Dominic Basulto"
            ],
            "summary": "The success of the new spot Bitcoin ETFs could unlock a new era of blockchain-based investment opportunities.",
            "banner_image": "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F770680%2Fgettyimages-1412212802.jpg&op=resize&w=700",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.983605"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.980716"
                }
            ],
            "overall_sentiment_score": 0.267406,
            "overall_sentiment_label": "Somewhat-Bullish",
            "ticker_sentiment": [
                {
                    "ticker": "BLK",
                    "relevance_score": "0.232661",
                    "ticker_sentiment_score": "0.202312",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.232661",
                    "ticker_sentiment_score": "0.292941",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "C",
                    "relevance_score": "0.047185",
                    "ticker_sentiment_score": "0.073374",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.094204",
                    "ticker_sentiment_score": "0.132798",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.405651",
                    "ticker_sentiment_score": "0.30795",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.140896",
                    "ticker_sentiment_score": "0.214338",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "History of Crypto: Ethereum's entry and Bitcoin's expansion",
            "url": "https://cointelegraph.com/news/mt-gox-collapse-ethereum-beginning-crypto-exchanges-launch",
            "time_published": "20240327T141500",
            "authors": [
                "Cointelegraph"
            ],
            "summary": "As Bitcoin continued its early stages of development, the largest exchange at the time was on its way to ruin.",
            "banner_image": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-03/4a6e1ba6-107d-4be5-88e6-bba6f0eb3ce3.jpg",
            "source": "Cointelegraph",
            "category_within_source": "n/a",
            "source_domain": "cointelegraph.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.108179"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.972193"
                }
            ],
            "overall_sentiment_score": 0.147736,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.050148",
                    "ticker_sentiment_score": "0.031016",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.100099",
                    "ticker_sentiment_score": "-0.048009",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.549581",
                    "ticker_sentiment_score": "0.132217",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.385137",
                    "ticker_sentiment_score": "0.389252",
                    "ticker_sentiment_label": "Bullish"
                }
            ]
        },
        {
            "title": "The Rise Of Crypto's Billion Dollar Zombies",
            "url": "https://www.forbes.com/sites/stevenehrlich/2024/03/27/the-rise-of-cryptos-billion-dollar-zombies/",
            "time_published": "20240327T103000",
            "authors": [
                "Steven Ehrlich"
            ],
            "summary": "With bitcoin soaring once again, blockchains are suddenly much more valuable. More than 50 of them are now worth over $1 billion-despite many having few users.",
            "banner_image": "https://imageio.forbes.com/specials-images/imageserve/6602ffc75a9fa87f216673f3/0x0.jpg?format=jpg&crop=1280,720,x0,y417,safe&height=900&width=1600&fit=bounds",
            "source": "Forbes",
            "category_within_source": "n/a",
            "source_domain": "www.forbes.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.999976"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Earnings",
                    "relevance_score": "0.214378"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.999937"
                }
            ],
            "overall_sentiment_score": 0.072049,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "NVDA",
                    "relevance_score": "0.013607",
                    "ticker_sentiment_score": "0.058991",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "SAN",
                    "relevance_score": "0.013607",
                    "ticker_sentiment_score": "0.148892",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "BAC",
                    "relevance_score": "0.013607",
                    "ticker_sentiment_score": "0.148892",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "UBER",
                    "relevance_score": "0.013607",
                    "ticker_sentiment_score": "-0.042521",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.040806",
                    "ticker_sentiment_score": "0.016776",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FILG",
                    "relevance_score": "0.013607",
                    "ticker_sentiment_score": "0.068472",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.013607",
                    "ticker_sentiment_score": "0.040782",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.379117",
                    "ticker_sentiment_score": "0.13997",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:UNI",
                    "relevance_score": "0.013607",
                    "ticker_sentiment_score": "-0.044326",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BSV",
                    "relevance_score": "0.040806",
                    "ticker_sentiment_score": "0.004923",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETC",
                    "relevance_score": "0.162164",
                    "ticker_sentiment_score": "0.042699",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BCH",
                    "relevance_score": "0.081506",
                    "ticker_sentiment_score": "0.051753",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.292498",
                    "ticker_sentiment_score": "0.123151",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:LTC",
                    "relevance_score": "0.108527",
                    "ticker_sentiment_score": "0.041988",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ALGO",
                    "relevance_score": "0.05439",
                    "ticker_sentiment_score": "0.047005",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ADA",
                    "relevance_score": "0.05439",
                    "ticker_sentiment_score": "0.059989",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:XTZ",
                    "relevance_score": "0.162164",
                    "ticker_sentiment_score": "0.093822",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "How Meme Coins Are Driving Coinbase, Solana, and Lido Higher",
            "url": "https://www.fool.com/investing/2024/03/25/how-memecoins-are-driving-coinbase-solana-and-lido/",
            "time_published": "20240325T184228",
            "authors": [
                "Travis Hoium"
            ],
            "summary": "Crypto is hot and meme coins are winning the day.",
            "banner_image": "https://g.foolcdn.com/editorial/images/770580/currency-and-crypto-digitization.jpg",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.928139"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.98396"
                }
            ],
            "overall_sentiment_score": 0.281905,
            "overall_sentiment_label": "Somewhat-Bullish",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.379435",
                    "ticker_sentiment_score": "0.324638",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.07887",
                    "ticker_sentiment_score": "0.372169",
                    "ticker_sentiment_label": "Bullish"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.379435",
                    "ticker_sentiment_score": "0.159576",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.233556",
                    "ticker_sentiment_score": "0.322406",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "Binance crypto exec reportedly on the run after busting out of custody in Nigeria",
            "url": "https://www.businessinsider.com/bitcoin-crypto-binance-exec-on-run-nigeria-tax-evasion-2024-3",
            "time_published": "20240325T133100",
            "authors": [
                "George Glover"
            ],
            "summary": "Binance crypto exec on the run after busting out of custody: reports - Business Insider ...",
            "banner_image": null,
            "source": "Business Insider",
            "category_within_source": "GoogleRSS",
            "source_domain": "www.businessinsider.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.158519"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.310843"
                }
            ],
            "overall_sentiment_score": -0.047548,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.127456",
                    "ticker_sentiment_score": "-0.087388",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:NGN",
                    "relevance_score": "0.127456",
                    "ticker_sentiment_score": "-0.087388",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.127456",
                    "ticker_sentiment_score": "-0.087388",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.127456",
                    "ticker_sentiment_score": "-0.087388",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Billionaires Are Buying Bitcoin: What Does It Mean for the Future Price of Bitcoin?",
            "url": "https://www.fool.com/investing/2024/03/22/billionaires-are-buying-bitcoin-what-does-it-mean/",
            "time_published": "20240322T093000",
            "authors": [
                "Dominic Basulto"
            ],
            "summary": "If billionaires are embracing crypto, that should send the price of Bitcoin soaring. But it's not guaranteed.",
            "banner_image": "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F769882%2Fgettyimages-990642348.jpg&op=resize&w=700",
            "source": "Motley Fool",
            "category_within_source": "n/a",
            "source_domain": "www.fool.com",
            "topics": [
                {
                    "topic": "Economy - Monetary",
                    "relevance_score": "0.451494"
                },
                {
                    "topic": "Retail & Wholesale",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.947132"
                },
                {
                    "topic": "Technology",
                    "relevance_score": "0.333333"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.333333"
                }
            ],
            "overall_sentiment_score": 0.095943,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "BLK",
                    "relevance_score": "0.171485",
                    "ticker_sentiment_score": "0.153551",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "MSTR",
                    "relevance_score": "0.129052",
                    "ticker_sentiment_score": "0.021225",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "AMZN",
                    "relevance_score": "0.043186",
                    "ticker_sentiment_score": "0.08193",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.043186",
                    "ticker_sentiment_score": "0.051646",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.086245",
                    "ticker_sentiment_score": "0.071489",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.989076",
                    "ticker_sentiment_score": "0.172331",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                }
            ]
        },
        {
            "title": "Coinbase Is Worried About Ether ETFs and the SEC. The Push Is on in Washington.",
            "url": "https://www.barrons.com/amp/articles/coinbase-sec-ether-crypto-etf-5e41845f",
            "time_published": "20240321T202200",
            "authors": [
                "Joe Light"
            ],
            "summary": "Coinbase Doubles Down on Washington as Ether ETFs Appear at Risk ...",
            "banner_image": "https://images.barrons.com/im-39142871/social",
            "source": "Barrons",
            "category_within_source": "n/a",
            "source_domain": "www.barrons.com",
            "topics": [
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.682689"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.795202"
                }
            ],
            "overall_sentiment_score": 0.012016,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "BLK",
                    "relevance_score": "0.109206",
                    "ticker_sentiment_score": "0.062264",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "IVZ",
                    "relevance_score": "0.054732",
                    "ticker_sentiment_score": "0.101971",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "WT",
                    "relevance_score": "0.054732",
                    "ticker_sentiment_score": "0.101971",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "COIN",
                    "relevance_score": "0.369163",
                    "ticker_sentiment_score": "0.132646",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.054732",
                    "ticker_sentiment_score": "0.064971",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.16317",
                    "ticker_sentiment_score": "-0.054295",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.216376",
                    "ticker_sentiment_score": "0.082113",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "'DOGE Finally Looks Ready To Rip Higher,' Says Crypto Analyst Following Period Of Consolidation",
            "url": "https://www.benzinga.com/markets/cryptocurrency/24/03/37866070/doge-finally-looks-ready-to-rip-higher-says-crypto-analyst-following-period-of-consolidati",
            "time_published": "20240321T110021",
            "authors": [
                "Mehab Qureshi"
            ],
            "summary": "Dogecoin DOGE/USD is catching the eye of cryptocurrency analysts who suggest the meme coin may be gearing up for a price surge.",
            "banner_image": "https://cdn.benzinga.com/files/images/story/2024/dogecoin-shutter5_5.jpeg?width=1200&height=800&fit=crop",
            "source": "Benzinga",
            "category_within_source": "Markets",
            "source_domain": "www.benzinga.com",
            "topics": [
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.266143"
                },
                {
                    "topic": "Manufacturing",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Finance",
                    "relevance_score": "0.5"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.158519"
                }
            ],
            "overall_sentiment_score": 0.191335,
            "overall_sentiment_label": "Somewhat-Bullish",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.09989",
                    "ticker_sentiment_score": "0.039173",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "TSLA",
                    "relevance_score": "0.384397",
                    "ticker_sentiment_score": "0.457027",
                    "ticker_sentiment_label": "Bullish"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.548633",
                    "ticker_sentiment_score": "-0.010061",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.384397",
                    "ticker_sentiment_score": "-0.010672",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:SHIB",
                    "relevance_score": "0.198221",
                    "ticker_sentiment_score": "0.0",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:DOGE",
                    "relevance_score": "0.832645",
                    "ticker_sentiment_score": "0.331585",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "CRYPTO:LTC",
                    "relevance_score": "0.198221",
                    "ticker_sentiment_score": "0.056678",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BCH",
                    "relevance_score": "0.198221",
                    "ticker_sentiment_score": "0.056678",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        },
        {
            "title": "Bitcoin ETFs make Coinbase a 'honeypot' for hackers and governments: Trezor CEO",
            "url": "https://cointelegraph.com/magazine/bitcoin-etf-coinbase-honeypot-hackers-government-trezor-ceo/",
            "time_published": "20240320T133000",
            "authors": [
                "Andrew Fenton"
            ],
            "summary": "Coinbase holds BTC for eight of 10 Bitcoin ETFs. Trezor CEO Matej Zak warns it could become irresistible for thieves… and the government.",
            "banner_image": "https://cointelegraph.com/magazine/wp-content/uploads/2024/03/magazine-Matej-Zak-CEO-Trezor-scaled.jpg",
            "source": "Cointelegraph",
            "category_within_source": "n/a",
            "source_domain": "cointelegraph.com",
            "topics": [
                {
                    "topic": "Finance",
                    "relevance_score": "1.0"
                },
                {
                    "topic": "Blockchain",
                    "relevance_score": "0.310843"
                },
                {
                    "topic": "Financial Markets",
                    "relevance_score": "0.310843"
                }
            ],
            "overall_sentiment_score": 0.134156,
            "overall_sentiment_label": "Neutral",
            "ticker_sentiment": [
                {
                    "ticker": "COIN",
                    "relevance_score": "0.113463",
                    "ticker_sentiment_score": "-0.111271",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "FOREX:USD",
                    "relevance_score": "0.028456",
                    "ticker_sentiment_score": "-0.086411",
                    "ticker_sentiment_label": "Neutral"
                },
                {
                    "ticker": "CRYPTO:BTC",
                    "relevance_score": "0.30523",
                    "ticker_sentiment_score": "0.183375",
                    "ticker_sentiment_label": "Somewhat-Bullish"
                },
                {
                    "ticker": "CRYPTO:ETH",
                    "relevance_score": "0.028456",
                    "ticker_sentiment_score": "0.064266",
                    "ticker_sentiment_label": "Neutral"
                }
            ]
        }
    ]
};
