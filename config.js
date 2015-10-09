var config = module.exports

config.port = process.env.PORT || '9000'
config.port = parseInt(config.port, 10)
config.assets_dir_path = __dirname + '/public/assets'
config.assets_dist_dir_path = __dirname + '/public/dist'
config.dist_manifest_path = config.assets_dist_dir_path + '/rev-manifest'
config.public_dir_path = __dirname + '/public'
