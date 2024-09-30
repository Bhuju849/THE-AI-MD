                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: answer
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: "> © Powered By AI-BOT-MD"
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    title: "",
                                    subtitle: "",
                                    hasMediaAttachment: false
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [
                                        {
                                            name: "cta_copy",
                                            buttonParamsJson: JSON.stringify({
                                                display_text: "Copy Your Code",
                                                id: "copy_code",
                                                copy_code: code
                                            })
                                        }
                                    ]
                                })
                            })
                        }
                    }
                }, {});

                await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                });
            } else {
                await Matrix.sendMessage(m.from, { text: answer }, { quoted: m });
            }

            await m.React("✅");
        } catch (err) {
            await Matrix.sendMessage(m.from, { text: "Something went wrong" }, { quoted: m });
            console.error('Error: ', err);
            await m.React("❌");
        }
    }
};

export default mistral;
