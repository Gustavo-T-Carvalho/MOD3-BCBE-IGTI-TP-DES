import Sequelize from "sequelize"

const sequelize = new Sequelize(
    "postgres://xdjosdxm:9HxdcLxjp0boQ88iuRdpEwadxQHlDCTQ@motty.db.elephantsql.com/xdjosdxm",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;