//export image map so all images are in one place. then we can reference them by their JSON name.

const imageMap = {
    header: require('./img/header.jpg'),
    icon: require('./img/icon.svg'),
    logo: require('./img/logo.svg'),
    moss: require('./img/moss.jpg')
}

module.exports = imageMap;

// export let images = JSON.parse(JSON.stringify(imageMap));
