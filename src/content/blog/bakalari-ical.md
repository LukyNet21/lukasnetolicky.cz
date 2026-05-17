---
title: Bakaláři iCal
description: A Go-based web API that transforms Bakaláři timetables into a subscribeable ics link for modern calendar apps.
published: 2026-05-15
tags: ["Go", "Bakaláři", "Calendar", "Timetable", "API"]
technologies: ["Go", "JSON", "iCal"]
cover: "../../assets/images/blog/bakalari-ical.png"
coverAlt: "Screenshot of the school timetable integrated into a mobile calendar"
links: [{name: "Source code", url: "https://github.com/LukyNet21/bakalari-ical"}]
---

# Bringing Bakaláři to My Calendar

In my school, we use a system called **Bakaláři**. It manages our grades and timetables, but the app is kind of slow and annoying to open every time I just want to see my next class.

I wanted my school schedule to show up directly in my Apple Calendar next to my other plans. Since I use Apple devices, having everything in one native app is much better. To fix this, I built a simple API in **Go** that grabs the timetable and turns it into an `iCal` link that I can subscribe to.

## Why Go?

I chose **Go** mainly because I really like using it. It’s fast and uses very little memory, though for a small project like this, performance isn't actually the most important thing. I just find it simple to work with, especially when making web requests or handling JSON data.

## How it works

The app acts as a bridge. When my iPhone or PC asks for a calendar update, the Go server:
1. Logs into Bakaláři using their mobile API.
2. Gets the latest timetable data for configured time period.
3. Converts everything into a calendar format.
4. Sends the file back so the calendar can display it.

### The Security Evolution
My main goal at the start was to make the app **stateless**. I wanted it to work without any internal storage or database so anyone could use it immediately without me having to set anything up for them. However, figuring out how to pass login info safely was a process:

* **Step 1: Plaintext.** I started by putting the username and password directly in the URL. This met my goal of being stateless, but it was really unsafe because anyone who saw the link could see the login details in plain text.
* **Step 2: Encryption.** To make it better, I tried encrypting the credentials before putting them in the URL. This felt safer, but I realized it still wasn't great. If the encryption key ever leaked, those credentials could be decrypted by anyone, and the URL was still carrying the sensitive data.
* **Step 3: Config File (Current).** I eventually realized that total statelessness wasn't worth the security risk. I moved to a system where the server uses a config file. This file maps a unique "Token" to the actual login credentials. Now, I just put my token in the URL. The server stays secure because the sensitive info never leaves the backend, and I can still let multiple people use it just by adding their credentials to the config.

## The Technical Bits

### Bakaláři API
Bakaláři doesn't have an official public API for developers. The API I'm using is actually meant for the **Bakaláři mobile app**. Fortunately, there is a community-driven [GitHub repository](https://github.com/bakalari-api/bakalari-api-v3/) that explains how this mobile API works. Using that, I was able to use the same endpoints to log in and pull all my timetable data into my own application.

### Time and Dates
Bakaláři doesn't give me proper timestamps. It just says a lesson starts at `08:00`. I had to write a bit of code to take that text and combine it with the right date so it shows up at the correct time in my calendar.

### Using a Library
To create the actual calendar file (`.ics`), I used a library called `arran4/golang-ical`. I didn't want to implement the whole calendar format from scratch myself, and this library handles all the complicated formatting rules for me so the file works perfectly on Apple Calendar.

## Conclusion

This was a fun project that actually makes my life easier. I don't have to open the Bakaláři app anymore, my classes are just right there on my lock screen or easily in my calendar. It was a great way to learn more about Go and how to handle user data more securely.