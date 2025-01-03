import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BigNumberTransformer } from './transformers';

@Entity({ name: 'signed_orders' })
export class SignedOrderEntity {
    @PrimaryColumn({ name: 'hash', type: 'varchar' })
    public hash?: string;

    @Column({ name: 'sender_address', type: 'varchar' })
    public senderAddress?: string;

    @Column({ name: 'maker_address', type: 'varchar' })
    public makerAddress?: string;

    @Column({ name: 'taker_address', type: 'varchar' })
    public takerAddress?: string;

    @Column({ name: 'maker_asset_data', type: 'varchar' })
    public makerAssetData?: string;

    @Column({ name: 'taker_asset_data', type: 'varchar' })
    public takerAssetData?: string;

    @Column({ name: 'exchange_address', type: 'varchar' })
    public exchangeAddress?: string;

    @Column({ name: 'fee_recipient_address', type: 'varchar' })
    public feeRecipientAddress?: string;

    @Column({ name: 'expiration_time_seconds', type: 'varchar' })
    public expirationTimeSeconds?: string;

    @Column({ name: 'maker_fee', type: 'varchar' })
    public makerFee?: string;

    @Column({ name: 'taker_fee', type: 'varchar' })
    public takerFee?: string;

    @Column({
        name: 'maker_asset_amount',
        type: 'decimal',
        precision: 80,
        scale: 0,
        transformer: BigNumberTransformer,
    })
    public makerAssetAmount?: string;

    @Column({
        name: 'taker_asset_amount',
        type: 'decimal',
        precision: 80,
        scale: 0,
        transformer: BigNumberTransformer,
    })
    public takerAssetAmount?: string;

    @Column({ name: 'salt', type: 'varchar' })
    public salt?: string;

    @Column({ name: 'signature', type: 'varchar' })
    public signature?: string;

    @Column({ name: 'remaining_fillable_taker_asset_amount', type: 'varchar' })
    public remainingFillableTakerAssetAmount?: string;

    @Column({ name: 'maker_fee_asset_data', type: 'varchar' })
    public makerFeeAssetData?: string;

    @Column({ name: 'taker_fee_asset_data', type: 'varchar' })
    public takerFeeAssetData?: string;

    @Column({ name: 'created_at', type: 'timestamptz', default: 'now()' })
    public createdAt?: string;
    constructor(
        opts: {
            hash?: string;
            senderAddress?: string;
            makerAddress?: string;
            takerAddress?: string;
            makerAssetData?: string;
            takerAssetData?: string;
            exchangeAddress?: string;
            feeRecipientAddress?: string;
            expirationTimeSeconds?: string;
            makerFee?: string;
            takerFee?: string;
            makerFeeAssetData?: string;
            takerFeeAssetData?: string;
            makerAssetAmount?: string;
            takerAssetAmount?: string;
            salt?: string;
            signature?: string;
            remainingFillableTakerAssetAmount?: string;
        } = {},
    ) {
        this.hash = opts.hash;
        this.senderAddress = opts.senderAddress;
        this.makerAddress = opts.makerAddress;
        this.takerAddress = opts.takerAddress;
        this.makerAssetData = opts.makerAssetData;
        this.takerAssetData = opts.takerAssetData;
        this.exchangeAddress = opts.exchangeAddress;
        this.feeRecipientAddress = opts.feeRecipientAddress;
        this.expirationTimeSeconds = opts.expirationTimeSeconds;
        this.makerFee = opts.makerFee;
        this.takerFee = opts.takerFee;
        this.makerFeeAssetData = opts.makerFeeAssetData;
        this.takerFeeAssetData = opts.takerFeeAssetData;
        this.makerAssetAmount = opts.makerAssetAmount;
        this.takerAssetAmount = opts.takerAssetAmount;
        this.salt = opts.salt;
        this.signature = opts.signature;
        this.remainingFillableTakerAssetAmount = opts.remainingFillableTakerAssetAmount;
    }
}
