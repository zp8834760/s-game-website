const fileRouter = {
    route: null,
    name: null,
    title: '文件管理',
    type: 'folder', // 类型: folder, tab, view
    icon:  'iconfont icon-jiemiansheji',
    filePath: 'views/file/', // 文件路径
    order: null,
    inNav: true,
    children: [
        {
            title: '图片上传',
            type: 'view',
            name: 'uploadImage',
            route: '/file/upload-image',
            filePath: 'views/file/UploadImage.vue',
            inNav: true,
            icon: 'iconfont icon-zidingyi',
            permission: ['上传图片'],
        },
        {
            title: '图片列表',
            type: 'view',
            name: 'imageList',
            route: '/file/image-list',
            filePath: 'views/file/ImageList.vue',
            inNav: true,
            icon: 'iconfont icon-zidingyi',
            permission: ['查看图片'],
        },
        {
            title: '视频上传',
            type: 'view',
            name: 'uploadVideo',
            route: '/file/upload-video',
            filePath: 'views/file/UploadVideo.vue',
            inNav: true,
            icon: 'iconfont icon-zidingyi',
            permission: ['上传视频'],
        },
        {
            title: '视频列表',
            type: 'view',
            name: 'videoList',
            route: '/file/video-list',
            filePath: 'views/file/VideoList.vue',
            inNav: true,
            icon: 'iconfont icon-zidingyi',
            permission: ['查看视频'],
        },
        {
            title: '音频上传',
            type: 'view',
            name: 'uploadAudio',
            route: '/file/upload-audios',
            filePath: 'views/file/UploadAudio.vue',
            inNav: true,
            icon: 'iconfont icon-zidingyi',
            permission: ['上传音频'],
        },
        {
            title: '音频列表',
            type: 'view',
            name: 'audioList',
            route: '/file/audio-list',
            filePath: 'views/file/AudioList.vue',
            inNav: true,
            icon: 'iconfont icon-zidingyi',
            permission: ['查看音频'],
        },
    ],
}

export default fileRouter