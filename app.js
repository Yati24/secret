const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/596FPnGGtyismdoreAkLvp",
    icon: "simple-icons:spotify",
  },
  {
    name: "Deezer",
    url: "https://www.deezer.com/fr/artist/190630677",
    icon: "simple-icons:deezer",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/%C3%A9knx/1654955748",
    icon: "simple-icons:applemusic",
  },
  {
    name: "YouTube",
    url: "https://music.youtube.com/channel/UC2FwhKZMLq3_vmK2NErcWxQ",
    icon: "simple-icons:youtube",
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.com/artists/B0BN4XZNHG/%C3%A9knx",
    icon: "simple-icons:amazonmusic",
  },
];

const linksContainer = document.getElementById("links");

links.forEach((link, index) => {
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.className =
    "link-item group block w-full rounded-xl border border-white/20 bg-card px-4 py-4 text-base font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 hover:shadow-lg hover:shadow-black/40 active:scale-[0.99]";
  anchor.style.animationDelay = `${320 + index * 100}ms`;

  const content = document.createElement("span");
  content.className = "flex items-center justify-center gap-3";

  const icon = document.createElement("iconify-icon");
  icon.setAttribute("icon", link.icon);
  icon.className =
    "text-xl transition duration-300 ease-out group-hover:scale-110 group-hover:rotate-6";

  const label = document.createElement("span");
  label.textContent = link.name;

  content.appendChild(icon);
  content.appendChild(label);
  anchor.appendChild(content);

  linksContainer.appendChild(anchor);
});
